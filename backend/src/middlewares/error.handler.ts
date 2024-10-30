import { DatabaseError } from "../errors/database.error";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../errors/api.error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof DatabaseError) {
        return res.status(err.statusCode).json({ error: { message: err.message, prismaCode: err.errorCode } });
    }
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    //TODO: Tratar erros de validação do Zod
    return res.status(500).json({ message: "Tratar erros de validação do Zod" });
}