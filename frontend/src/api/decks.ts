import { apiUrl } from "./config"

export const createDeck = async (title: string) => {
    const deck = await fetch(`${apiUrl}/decks`,{
        method: "POST",
        body: JSON.stringify({title}),
        headers: {
            'Content-Type': "application/json"
        }
    })
    return deck;
}