import express from "express";
import { defaultRoute } from "./defaultRoute";
import { animeRoute } from "./animeRoutes";

export const routes = express.Router();

routes.use(defaultRoute);
routes.use(animeRoute);
