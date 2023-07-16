import { useState } from "react";
import "./CreateDeck.css"

const CreateDeck = () => {
    const [title, setTitle] = useState<string>("");
    return (
        <div className="create_deck">
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value)
                }} />
            <button>Create Deck</button>
        </div>
    )
}

export default CreateDeck