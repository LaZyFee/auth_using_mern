import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on port 5000");
});
