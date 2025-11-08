// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());


app.use(
    cors({
        origin: "*", // Permite todas las conexiones (ideal para desarrollo)
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("🟢 MongoDB conectado correctamente"))
    .catch((err) => console.error("❌ Error de conexión MongoDB:", err));


app.use("/api/users", authRoutes);


app.get("/", (req, res) => {
    res.send("🚀 Servidor FitLife Backend funcionando correctamente!");
});


app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
