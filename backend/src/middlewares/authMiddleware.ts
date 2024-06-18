import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { dataSource } from "../config/db";
import { User } from "../entities/Users";

dotenv.config();
const { JWT_SECRET = "" } = process.env;

export function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decode = jwt.verify(token, JWT_SECRET);
  if (!decode) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.locals.currentUser = decode;
  next();
}

export function authorization(roles: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userRepo = dataSource.getRepository(User);
    const user = await userRepo.findOne({
      where: { id: res.locals.currentUser.id },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!roles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}
