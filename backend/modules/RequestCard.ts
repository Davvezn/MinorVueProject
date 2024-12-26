import mongoose from "mongoose";

const RequestCardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    game: {type: String, required: true},
    description: {type: String, required: true},
    gametype: {type: String, required: true}    
}, {timestamps: true});

const RequestCard = mongoose.model('RequestCard', RequestCardSchema);
export default RequestCard;