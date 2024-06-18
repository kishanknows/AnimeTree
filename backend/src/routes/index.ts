import express from "express";
import { defaultRoute } from "./defaultRoute";
import { animeRoute } from "./animeRoutes";
import { userRoute } from "./userRoutes";

export const routes = express.Router();

routes.use(defaultRoute);
routes.use(animeRoute);
routes.use(userRoute);
