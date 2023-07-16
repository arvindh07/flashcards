import { apiUrl } from "./config"

export interface DeckInterface{
    _id: string;
    title: string;
    __v: number;
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