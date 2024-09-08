import express from "express";
import { updateNews, getNews } from "../controllers/newsController";
import {
  getGenreAnime,
  updateGenreAnime,
} from "../controllers/genreController";
import {
  getWatchlist,
  updateWatchlist,
  deleteWatchlist,
} from "../controllers/watchlistController";
import { authentication, authorization } from "../middlewares/authMiddleware";

export const animeRoute = express.Router();

animeRoute.post("/anime/news", updateNews);
animeRoute.get("/anime/news", getNews);

animeRoute.get(
  "/anime/watchlist",
  authentication,
  authorization(["admin", "user"]),
  getWatchlist
);
animeRoute.post(
  "/anime/watchlist",
  authentication,
  authorization(["admin", "user"]),
  updateWatchlist
);
animeRoute.delete(
  "/anime/watchlist",
  authentication,
  authorization(["admin", "user"]),
  deleteWatchlist
);

animeRoute.get("/anime/genre/:id", getGenreAnime);
animeRoute.post("/anime/genre", updateGenreAnime);
