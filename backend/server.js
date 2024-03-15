import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import messagesRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config()

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messagesRoutes)
app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//     res.send("Hello world!");
// })


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening on port!! ${PORT}`);
})