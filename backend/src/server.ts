import express from "express";
import { Request } from "express";
import { Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {router as DeckRouter} from "./routes/decksRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/decks", DeckRouter);

app.get("/", (req: Request, res: Response) => {
    res.json({
        msg: "Welcome to backend",
    });
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB and running at port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Mongo db err -> ", err);

    })
