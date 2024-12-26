<template>
    <aside v-if="visible" class="filter-menu">
        <h2>Filters</h2>
        <form @submit.prevent="applyFilters">
        <label>
            Age:
            <input type="number" v-model="filters.age" />
        </label>
        <label>
            Game: 
            <input type="text" v-model="filters.game" />
        </label>
        <button type="submit">Apply</button>
        </form>
    </aside>
    
</template>

<script>
export default {
    props: ['visible'],
    data() {
        return {
            filters: {
                age: '',
                game: '',
            },
        };
    },
    methods: {
        applyFilters() {
            this.$emit('apply-filters', this.filter);
        },
    },
};
</script>

<style scoped>
.filter-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    background: white;
    box-shadow: 2px 0 5px rgba(6, 155, 229, 0.2);
    padding:1rem;
}

</style>