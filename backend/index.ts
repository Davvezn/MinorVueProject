import mongoose from "mongoose"
import Elysia from "elysia"
import { cors } from "@elysiajs/cors";;
import RequestCard from "./modules/RequestCard.js"

const db = await mongoose.connect('<database-connection>')

new Elysia()
    .use(cors({ origin: 'http://localhost:5173'}))
    .post('/api/createNewRequest', async ({ body, set }) => {
        const {name, age, game, description, gametype} = body as {
            name: string;
            age: number;
            game: string;
            description: string;
            gametype: string;
        };

        if (!name || !age || !game || !description || !gametype) {
            set.status = 400;
            return {message: 'One must fill all fields'};
        }

        const requestCard = new RequestCard({name, age, game, description, gametype});

        try {
            await requestCard.save();
            return { message: "New Request Published succesfully. ", data: requestCard};
        } catch (error) {
            set.status = 422;
            return {message: "Failed to create Request Card", error};
        }
    })
    .get('/api/search', async({ query, set}) => {
        const searchTerm = query.term || '';

        if(!searchTerm) {
            set.status = 400;
            return {message: 'search tearm is required'}
        }

        try {
            const results = await RequestCard.find({
                $or : [
                    { name: {$regex: searchTerm, $options: 'i'} },
                    { game: {$regex: searchTerm, $options: 'i'} },
                    { description: {$regex: searchTerm, $options: 'i'} },
                ],
            });
            return results;
        } catch (error) {
            set.status = 500;
            return { message: 'error fetching search results', error}; 
        }
    })
    .get('/allRequestCards', async({set}) => {
        try {
            const allRequestCards = await RequestCard.find();
            return(allRequestCards);
        } catch (error) {
            set.status = 500; 
            return { mesage: "failed to fetch request cards.", error };
        }
    })
    
    .listen(3023)
    console.log('server is running on http://localhost:3023');
