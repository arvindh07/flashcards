import express from "express";
import { createDeck, getDecks } from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);
router.get("/", getDecks);

export {router};