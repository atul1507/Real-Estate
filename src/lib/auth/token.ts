import jwt from "jsonwebtoken";





type TokenPayload = {


    id:string;


    email:string;


    role:string;


}








export function createToken(

    payload:TokenPayload

){



    const token = jwt.sign(

        payload,


        process.env.JWT_SECRET!,


        {

            expiresIn:"7d"

        }

    );



    return token;


}









export function verifyToken(

    token:string

){



    try{


        const decoded = jwt.verify(

            token,


            process.env.JWT_SECRET!

        ) as TokenPayload;



        return decoded;



    }


    catch(error){


        return null;


    }



}