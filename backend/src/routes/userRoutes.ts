import express from "express";
import { authentication, authorization } from "../middlewares/authMiddleware";
import { UserController } from "../controllers/userController";
import { authController } from "../controllers/authController";

export const userRoute = express.Router();

userRoute.get(
  "/users",
  authentication,
  authorization(["admin"]),
  UserController.getUsers
);
userRoute.get(
  "/profile",
  authentication,
  authorization(["admin", "user"]),
  authController.getProfile
);
userRoute.post("/signup", UserController.signup);
userRoute.post("/login", authController.login);
userRoute.put(
  "/update/:id",
  authentication,
  authorization(["admin", "user"]),
  UserController.updateUser
);
userRoute.delete(
  "/delete/:id",
  authentication,
  authorization(["admin"]),
  UserController.deleteUser
);
