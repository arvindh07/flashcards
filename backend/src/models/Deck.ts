import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    }
}, {timestamps: true})

const deckSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cards: [cardSchema]
}, {timestamps: true});

export default mongoose.model("Deck", deckSchema);