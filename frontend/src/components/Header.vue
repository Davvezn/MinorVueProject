<template>
    <header class="header">
        <div class="menu">
            <button @click="toggleMenu">=</button>
        </div>
        <h1>Team finder</h1>
    </header>
</template>

<script>
export default {
    methods: {
        toggleMenu() {
            this.$emit('toggle-filter-menu');
        },
    },
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #2f2f2f;
    color:rgb(0, 171, 83); 
}
.menu button {
    font-size: 1.5rem;
    background: none;
    border: none;
    color:rgb(65, 251, 99);
    cursor: pointer;
}
</style>