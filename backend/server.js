import express from "express";
import dotenv from "dotenv"
import path from "path";

import authRoutes from "./routes/auth.routes.js"
import messagesRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config()

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messagesRoutes)
app.use("/api/users", userRoutes)

//esto le dice la ruta que debe buscar
app.use(express.static(path.join(__dirname, "/frontend/dist")))

//esto le dice de que archio iniciar, en este caso idex.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"));
})

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening on port!! ${PORT}`);
})

//primero se debe hacer un npm run build del frontend, luego se configuran unos comandos y luego se hace una build general, tando del frontedn como backend