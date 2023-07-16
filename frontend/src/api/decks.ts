import { apiUrl } from "./config"

export interface DeckInterface{
    _id: string;
    title: string;
    __v: number;
    cards: any;
    createdAt: string;
    modifiedAt: string;
}

export const createDeck = async (title: string) => {
    const response = await fetch(`${apiUrl}/decks`,{
        method: "POST",
        body: JSON.stringify({title}),
        headers: {
            'Content-Type': "application/json"
        }
    })
    const json = await response.json();
    console.log("api post", json);
    return json;
}

export const getDecks = async() => {
    const response = await fetch(`${apiUrl}/decks`);
    const json = await response.json();
    console.log("api get", json);
    return json;
}

export const deleteDeck = async(id: string) => {
    const response = await fetch(`${apiUrl}/decks/delete/${id}`, {
        method: "DELETE"
    });
    const json = await response.json();
    console.log("api delete", json);
    return json;
}

export const getDeck = async(id:string) => {
    const response = await fetch(`${apiUrl}/decks/${id}`);
    const json = await response.json();
    console.log("api get single ", json);
    return json;
}

export const createCard = async(deckId: string, text: string) => {
    const response = await fetch(`${apiUrl}/decks/${deckId}/cards`,{
        method: "POST",
        body: JSON.stringify({text}),
        headers: {
            'Content-Type': "application/json"
        }
    })
    const json = await response.json();
    console.log("api post card", json);
    return json;
}