<template>
    <div>
        <h2>Create a New Post</h2>
        <form @submit.prevent="submitPost">
            <label for="name">Name:</label>
            <input
                id="name"
                v-model="formData.name"
                type="text"
                placeholder="Enter Your Username"
                required
            />

            <label for="age">Age:</label>
            <input
                id="age"
                v-model="formData.age"
                type="number"
                placeholder="Enter player age"
                required
            />

            <label for="game">Game:</label>
            <input
                id="game"
                v-model="formData.game"
                type="text"
                placeholder="Enter game name"
                required
            />

            <label for="description">Description:</label>
            <textarea
                id="description"
                v-model="formData.description"
                placeholder="Describe your request"
                required
            ></textarea>

            <label for="gametype">Game Type:</label>
            <input
                id="gametype"
                v-model="formData.gametype"
                type="text"
                placeholder="Enter game type (e.g., Casual, Ranked)"
                required
            />

            <button id="postButton" type="submit">Post</button>
        </form>
    </div>
</template>


<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        // Define reactive formData using ref
        const formData = ref({
            name: '',
            age: null,
            game: '',
            description: '',
            gametype: '',
        });

        // Function to handle form submission
        const submitPost = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:3023/api/createNewRequest',
                    formData.value
                );

                if (response.status === 200) {
                    alert('Post submitted successfully');
                    resetForm();
                } else {
                    alert(`Failed to submit post: ${response.data.message}`);
                }
            } catch (error) {
                console.error('Error submitting post:', error);
                alert('An error occurred while submitting the post');
            }
        };

        const resetForm = () => {
            formData.value = {
                name: '',
                age: null,
                game: '',
                description: '',
                gametype: '',
            };
        };
        return {
            formData,
            submitPost,
        };
    },
};
</script>


<style scoped>
.post-form{
    max-width: 600px;
    margin: auto;
    border: 1px solid #ccc;
}
#postButton {
    background-color: rgb(225, 16, 16);
    color: rgb(71, 0, 251);
    border: none;
    border-radius: 20%;
    padding: 10px 20px;
    cursor: pointer;
}
#postButton:hover {
    background-color: #73ff16;

}
</style>