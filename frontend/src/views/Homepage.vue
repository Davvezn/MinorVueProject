<template>
    <section>
        <h2>Find Teammates</h2>
        <div v-for="request in requests" :key="request.id">
            <RequestCard :request="request" />
        </div>
    </section>
</template>

<script>
import RequestCard from '../components/RequestCard.vue';

export default {
    components: {
        RequestCard,
    },
    data() {
        return {
            requests: [
                {id: 1, game: 'valorant', age: 25, description: 'looking for comp team', gameType: 'PvP'},
                {id: 2, game: 'fortnite', age: 18, description: 'Casual game needed', gameType: 'PvP'},
            ],
        };
    },
};
</script>

<style scoped>
section {
    padding: 1rem;
}
section h2 {
    color: rgb(0, 255, 76);
}

</style>