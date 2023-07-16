import { useEffect, useState } from "react";
import "./CreateDeck.css"
import { DeckInterface, createDeck, deleteDeck, getDecks } from "../../api/decks";
import { useNavigate } from "react-router-dom";

const CreateDeck = () => {
    const [title, setTitle] = useState<string>("");
    const [decks, setDecks] = useState<any>([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleCreateDeck = async () => {
        if (title.length === 0) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        const { deck } = await createDeck(title);
        setTitle("");
        setDecks([deck, ...decks]);
    }

    const handleDeleteDeck = async (e: any,deleteId: string) => {65
        e.stopPropagation();
        await deleteDeck(deleteId);
        setDecks(decks?.filter((d: DeckInterface) => d._id !== deleteId))
    }

    const handleNavigate = (deckId: string) => {
        navigate(`decks/${deckId}`);
    }

    useEffect(() => {
        async function fetchDecks() {
            const decks = await getDecks();
            setDecks(decks);
        }
        fetchDecks();
    }, [])

    return (
        <>
            <div className="create_deck">
                <div className="error">{error && "Please fill the title"}</div>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.target.value);
                        setError(false);
                    }} />
                <button onClick={handleCreateDeck}>Create Deck</button>
            </div>
            <div className="display__decks">
                {decks?.map((deck: DeckInterface) => {
                    return (
                        <div key={deck._id} className="deck" onClick={() => handleNavigate(deck._id)}>
                            <svg
                                className="delete"
                                onClick={(e: any) => handleDeleteDeck(e, deck._id)} 
                                id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.16 122.88"><title>delete</title><path d="M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z"/></svg>
                            <h2>{deck.title}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CreateDeck