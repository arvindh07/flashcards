import { Request, Response } from "express";
import Deck from "../models/Deck";

export const createDeck = async (req: Request, res: Response) => {
    const {title} = req.body;
    
    if(!title){
        return res.status(400).json({
            "error": "Title must be filled"
        })
    }
    const deck = await Deck.create({title});
    res.status(200).json({
        "message": "Deck created successfully",
        deck
    })
}

export const getDecks = async (req: Request,res: Response) => {
    const decks = await Deck.find().sort({ createdAt: -1 });
    res.status(200).json(decks);
}

export const deleteDeck = async (req: Request, res: Response) => {
    const {id} = req.params;
    const deletedDeck = await Deck.findByIdAndDelete(id);
    res.status(200).json({deck: deletedDeck});
}

export const createCard = async (req: Request, res: Response) => {
    const {deckId} = req.params;
    const deck = await Deck.findById(deckId);
    if(!deck){
        return res.status(400).json({
            "message": "Not deck found"
        })
    }
    const {text} = req.body;
    deck.cards.push({text});
    await deck.save();
    res.status(200).json(deck);
}

export const getSingleDeck = async (req: Request, res: Response) => {
    const {deckId} = req.params;
    const deck = await Deck.findById(deckId);
    if(!deck){
        return res.status(400).json({
            "message": "Not deck found"
        })
    }
    res.status(200).json(deck);
}

export const deleteCard = async (req: Request, res: Response) => {
    const {deckId, cardIndex} = req.params;    
    const deck: any = await Deck.findById(deckId);
    if(!deck){
        return res.status(400).json({
            "message": "Not deck found"
        })
    }
    deck.cards.splice(cardIndex, 1);
    await deck.save();
    res.status(200).json({deck: deck});
}