import { Request, Response } from "express";
import * as cache from "memory-cache";
import { encrypt } from "../utils/encryption";
import { User } from "../entities/Users";
import { dataSource } from "../config/db";

export class UserController {
  static async signup(req: Request, res: Response) {
    const { username, email, password, role } = req.body;
    const encryptedPassword = await encrypt.encryptPassword(password);
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = encryptedPassword;
    user.role = role;

    const userRepository = dataSource.getRepository(User);
    await userRepository.save(user);

    const token = encrypt.generateToken({ id: user.id });

    return res
      .status(200)
      .json({ message: "User created successfully", token, user });
  }

  static async getUsers(req: Request, res: Response) {
    const data = cache.get("data");
    console.log(data);
    if (data) {
      console.log("serving from cache");
      return res.status(200).json({
        data,
      });
    } else {
      console.log("serving from db");
      const userRepository = dataSource.getRepository(User);
      const users = await userRepository.find();

      cache.put("data", users, 6000);
      return res.status(200).json({
        data: users,
      });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { username, email } = req.body;
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.username = username;
    user.email = email;
    await userRepository.save(user);
    return res.status(200).json({ message: "user updated", user });
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await userRepository.remove(user);
    return res.status(200).json({ message: "user deleted" });
  }
}
