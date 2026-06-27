export interface TokenPayload {

    id: string;

    email: string;

    role: string;

}






export interface AuthenticatedUser {

    id: string;

    name: string;

    email: string;

    role: string;

    createdAt: Date;

    updatedAt: Date;

}