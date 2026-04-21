import type { Request, Response } from "express";
import prismaClient from "../config/db.js";

export const registerUser = async (req: Request, res: Response) => {
    //console.log("Req reached to controller")
    const { username, email, password } = req.body;

    try {
        const user = await prismaClient.user.create({
            data: {
                username,
                email,
                password
            }
        })

        res.json({
            messsage: "User created",
            user
        })
    } catch (error) {
        console.log(error);
        res.send("Error in register user");
    }
}

export const loginUser = async (req: Request, res: Response) => {
    console.log("Req reached to controller")
}

export const getUser = async (req: Request, res: Response) => {
    console.log("Req reached to controller")
}

export const refreshToken = async (req: Request, res: Response) => {
    console.log("Req reached to controller")
}

export const logoutUser = async (req: Request, res: Response) => {
    console.log("Req reached to controller")
}


export const logoutAllUser = async (req: Request, res: Response) => {
    console.log("Req reached to controller")
}