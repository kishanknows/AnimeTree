import express from "express";
import { updateNews, getNews } from "../controllers/newsController";
import {
  getGenreAnime,
  updateGenreAnime,
} from "../controllers/genreController";

export const animeRoute = express.Router();

animeRoute.post("/anime/news", updateNews);
animeRoute.get("/anime/news", getNews);

animeRoute.get("/anime/genre/:id", getGenreAnime);
animeRoute.post("/anime/genre", updateGenreAnime);
