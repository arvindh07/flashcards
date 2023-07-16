import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("Deck", deckSchema);