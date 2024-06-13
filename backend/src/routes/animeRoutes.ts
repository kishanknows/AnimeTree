import express from "express";
import { updateNews, getNews } from "../controllers/newsController";

export const animeRoute = express.Router();

animeRoute.post("/anime/news", updateNews);
animeRoute.get("/anime/news", getNews);
