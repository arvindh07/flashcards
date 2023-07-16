import { useState } from "react";
import "./CreateDeck.css"
import { createDeck } from "../../api/decks";

const CreateDeck = () => {
    const [title, setTitle] = useState<string>("");
    const handleCreateDeck = async () => {
        const response = await createDeck(title);
        console.log("res -> ",response.json());
    }

    return (
        <div className="create_deck">
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value)
                }} />
            <button onClick={handleCreateDeck}>Create Deck</button>
        </div>
    )
}

export default CreateDeck