import { useState } from "react"

const CreateDeck = () => {
    const [title, setTitle] = useState<string>("");
    return (
        <div>
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