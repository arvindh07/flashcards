import express from "express";
import { createCard, createDeck, deleteDeck, getDecks, getSingleDeck } from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);
router.get("/", getDecks);
router.delete("/delete/:id", deleteDeck);
// get single deck
router.get("/:deckId",getSingleDeck);

// cards route
router.post("/:deckId/cards", createCard);

export {router};