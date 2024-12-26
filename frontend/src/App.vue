<template>
  <div id="app">
    <Header @search="handleSearch" />
    <router-view :searchTerm="searchTerm" />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm;
    },
  },
};
</script>
