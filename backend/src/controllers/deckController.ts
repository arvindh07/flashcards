import { Request, Response } from "express";
import Deck from "../models/Deck";

export const createDeck = async (req: Request, res: Response) => {
    const {title} = req.body;
    console.log(req.body);
    
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
    const decks = await Deck.find();
    res.status(200).json(decks);
}