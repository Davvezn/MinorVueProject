<template>
    <div class="request-card">
        <h3>{{ request.game }}</h3>
        <p>Age: {{ request.age }}</p>
        <p>{{ request.description }}</p>
        <p>Game Type: {{ request.gameType }}</p>
    </div>
</template>

<script>
export default {
    props: {
        request: {
            type: Object,
            Required: true,
        },
    },
};
</script>

<style scoped>
.request-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: -4px 4px 5px rgba(6, 229, 132, 0.392);
}
</style>