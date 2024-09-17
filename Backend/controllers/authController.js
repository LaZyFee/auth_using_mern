//external import
import bcrypt from "bcrypt";

//intenal import
import { UserModel } from "../models/userModel.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";


export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if (!email || !password, !name) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(1000 + Math.random() * 900000).toString();
        const user = new UserModel({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
        });

        await user.save();
        generateTokenAndSetCookie(res, user._id)
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        });
    }

    catch (error) {

        res.status(500).json({ message: error.message });

    }









}
export const login = async (req, res) => {
    res.send("login");
}
export const logout = async (req, res) => {
    res.send("logout");
}