import { useEffect, useState } from "react";
import "./CreateDeck.css"
import { DeckInterface, createDeck, getDecks } from "../../api/decks";

const CreateDeck = () => {
    const [title, setTitle] = useState<string>("");
    const [decks, setDecks] = useState<any>([]);
    const [error, setError] = useState(false);

    const handleCreateDeck = async () => {
        if(title.length === 0){
            setError(true);
            return ;
        }else{
            setError(false);
        }
        const {deck} = await createDeck(title);
        setTitle("");
        setDecks([deck, ...decks]);
    }

    useEffect(() => {
        async function fetchDecks(){
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
                            <div key={deck._id} className="deck">
                                <h2>{deck.title}</h2>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default CreateDeck