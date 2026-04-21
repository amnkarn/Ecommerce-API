import type { Request, Response } from "express";
import prismaClient from "../config/db.js";
import bcrypt from "bcrypt";
import { userLoginSchema } from "../validators/login.validate.js";
import { userRegisterSchema } from "../validators/register.validate.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req: Request, res: Response) => {
    const parsedResult = userRegisterSchema.safeParse(req.body);
    if(!parsedResult.success) {
        return res.status(400).json({
            message: "Something is missing"
        })
    }

    try {
        const {username, email, password} = parsedResult.data;

        const isAlreayExists = await prismaClient.user.findUnique({
            where: {
                email
            }
        })

        if(isAlreayExists) {
            return res.status(409).json({
                messasge: "User already exists",
            })
        }

        const salt = await bcrypt.genSalt(5);
        const hash = await bcrypt.hash(password, salt);

        const user = await prismaClient.user.create({
            data: {
                username,
                email,
                password: hash
            }
        })

        res.status(201).json({
            message: "User created successfully",
            user: {
                username: user.username,
                email: user.email,
                verified: user.verified,
            }
        })
    } catch (error) {
        console.log(error);
        res.send("Error in register user");
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const parsedResult = userLoginSchema.safeParse(req.body);
    if(!parsedResult.success) {
        return res.status(400).json({
            message: "Something is missing"
        })
    }

    try {
        const { email, password } = parsedResult.data;

        const user = await prismaClient.user.findUnique({
            where: {
                email
            }
        })
        if(!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const result = await bcrypt.compare(password, user.password);

        if(!result) {
            return res.status(401).json({
                message: "Wrong password"
            })
        }

        //generate refresh and access toke
        generateToken(user.id, res);

        res.status(200).json({
            message: "Successful loged in"
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            message: "Something went wrong in user login"
        })
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        //@ts-ignore
        const userId = req.user.id;
        
        const user = await prismaClient.user.findFirst({
            where: {
                id: userId
            }
        })

        res.status(200).json({
            user
        })

    } catch (error) {
        console.log(error);
    }
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