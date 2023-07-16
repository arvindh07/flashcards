import express from "express";
import { createCard, createDeck, deleteDeck, getDecks } from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);
router.get("/", getDecks);
router.delete("/delete/:id", deleteDeck);

// cards route
router.post("/:deckId/cards", createCard);

export {router};