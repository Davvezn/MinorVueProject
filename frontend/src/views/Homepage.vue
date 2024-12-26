<template>
    <section>
      <div v-if="loading" class="loading-message">Loading...</div>
  
      <div v-else-if="filteredRequests.length > 0" class="results-container">
        <RequestCard
          v-for="request in filteredRequests"
          :key="request._id"
          :request="request"
        />
      </div>
  
      <div v-else-if="searchTerm && !loading" class="no-results-message">
        <p>No results found for "{{ searchTerm }}"</p>
      </div>
  
      <div v-else>
        <RequestCard
          v-for="request in defaultRequests"
          :key="request._id"
          :request="request"
        />
      </div>
    </section>
</template>
  
  <script>
  import axios from 'axios';
  import RequestCard from '../components/RequestCard.vue';
  
  export default {
    components: {
      RequestCard,
    },
    props: {
      searchTerm: String, // Receive search term from App.vue
    },
    data() {
      return {
        filteredRequests: [],
        defaultRequests: [],
        loading: false,
      };
    },
    methods: {
      async fetchRequests() {
        this.loading = true;
        try {
          const response = await axios.get('http://localhost:3023/api/requests');
          this.defaultRequests = response.data;
        } catch (error) {
          console.error('Error fetching requests:', error);
        } finally {
          this.loading = false;
        }
      },
      async performSearch() {
        if (!this.searchTerm.trim()) {
          this.filteredRequests = [];
          return;
        }
  
        this.loading = true;
        try {
          const response = await axios.get(
            `http://localhost:3023/api/search?term=${this.searchTerm}`
          );
          this.filteredRequests = response.data;
        } catch (error) {
          console.error('Error fetching search results:', error);
          this.filteredRequests = [];
        } finally {
          this.loading = false;
        }
      },
    },
    watch: {
      searchTerm(newTerm) {
        this.performSearch(); // Trigger search every time the term changes
      },
    },
    created() {
      this.fetchRequests(); // Fetch initial data
    },
  };
</script>
  
<style scoped>
.results-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}
.loading-message,
.no-results-message {
    text-align: center;
    margin: 1rem;
    font-size: 1.2rem;
    color: #666;
}
</style>