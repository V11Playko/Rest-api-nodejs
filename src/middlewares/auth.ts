import { UserRepository } from "@repository/UserRepository";
import { UserService } from "@service/UserService";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUserRepository, IUserService, User } from "types/UsersTypes";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const jwtSecret = process.env.JWT_SECRET as string;
  const token = req.headers.authorization?.replace(/^Bearer\s+/, "") as string;
  try {
    const verify = jwt.verify(token, jwtSecret);
    next();
  } catch (error: any) {
    console.log("error :>> ", error);
    res.status(401).send(error.message);
  }
};