import express from "express";
import { createDeck, deleteDeck, getDecks } from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);
router.get("/", getDecks);
router.delete("/delete/:id", deleteDeck);

export {router};