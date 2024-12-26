<template>
    <header class="app-header">
        <div class="menu">
            <button @click="toggleMenu">=</button>
        </div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/createNewRequest">Look-for-Team</router-link>
        </nav>
        <h1>Team Finder</h1>
        <input
            placeholder="Search"
            v-model="searchTerm"
            @input="emitSearchTerm"
            class="search-input"
        />
    </header>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: '',
        };
    },
    methods: {
        emitSearchTerm() {
            this.$emit('search', this.searchTerm);
        },
    },
};
</script>

<style scoped>
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #2f2f2f;
    color: rgb(0, 171, 83);
}
.search-input {
    width: 50%;
    padding: 0.5rem;
    margin: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
}
</style>
