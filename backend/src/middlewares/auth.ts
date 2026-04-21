import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default async function auth(req: Request, res: Response, next: NextFunction) {
    const refreshToken = req.cookies.refreshToken;
    const accessToken = req.cookies.accessToken;
    const jwtSecret = process.env.JWT_SECRET;
    if(!jwtSecret) return;


    if(!refreshToken || !accessToken) {
        res.status(400).json({
            message: "User is not logged in",
        })
    }

    try {
        const decode = jwt.verify(refreshToken, jwtSecret) as {id: string, jti: string};

        if(!decode) {
            return res.status(400).json({
                message: "User is not logged in",
            })
        }

        //check blacklist

        (req as any).user = decode;
        next();
    } catch (error) {
        res.status(500).json({
            message: "Error in auth"
        })
    }
}