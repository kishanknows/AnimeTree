import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { User } from "../entities/Users";
import { encrypt } from "../utils/encryption";

export class authController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          message: "email and password required",
        });
      }

      const userRepository = dataSource.getRepository(User);
      const user = await userRepository.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const isPasswordValid = encrypt.comparePassword(user.password, password);

      if (!isPasswordValid) {
        return res.status(404).json({
          message: "Incorrect password",
        });
      }
      const token = encrypt.generateToken({ id: user.id });

      return res.status(200).json({
        message: "Login successful",
        user,
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }

  static async getProfile(req: Request, res: Response) {
    if (!res.locals.currentUser) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: res.locals.currentUser.id },
    });
    return res.status(200).json({ ...user, password: undefined });
  }
}
