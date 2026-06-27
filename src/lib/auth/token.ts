import jwt from "jsonwebtoken";

import { TokenPayload } from "@/types/auth.types";





export function createToken(

    payload: TokenPayload

) {

    return jwt.sign(

        payload,

        process.env.JWT_SECRET!,

        {

            expiresIn: "7d"

        }

    );

}







export function verifyToken(

    token: string

): TokenPayload {

    return jwt.verify(

        token,

        process.env.JWT_SECRET!

    ) as TokenPayload;

}