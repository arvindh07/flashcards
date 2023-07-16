import express from "express";
import { createCard, createDeck, deleteCard, deleteDeck, getDecks, getSingleDeck } from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);
router.get("/", getDecks);
router.delete("/delete/:id", deleteDeck);
// get single deck
router.get("/:deckId",getSingleDeck);

// cards route
router.post("/:deckId/cards", createCard);
router.delete("/:deckId/cards/:cardIndex", deleteCard);

export {router};