import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "El usuario ya está registrado." });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({
            message: "Usuario registrado exitosamente",
            user: { id: newUser._id, name: newUser.name, email: newUser.email },
        });
    } catch (error) {
        console.error(" Error en registro:", error);
        res.status(500).json({ message: "Error al registrar usuario" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).json({ message: "Usuario no encontrado" }); // ← CORREGIDO

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: "Contraseña incorrecta" }); // ← CORREGIDO

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Inicio de sesión exitoso",
            user: { id: user._id, name: user.name, email: user.email },
            token,
        });

    } catch (error) {
        console.error(" Error en login:", error);
        res.status(500).json({ message: "Error al iniciar sesión" });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user)
            return res.status(404).json({ message: "Usuario no encontrado" });

        res.json({
            message: "Perfil de usuario obtenido con éxito",
            user
        });

    } catch (error) {
        console.error(" Error al obtener perfil:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};
