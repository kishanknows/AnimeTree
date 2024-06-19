import { Request, Response } from "express";
import { GenreScraper } from "../scraper/genreScraper";
import axios from "axios";
import { dataSource } from "../config/db";
import { Anime } from "../entities/Anime";

export async function updateGenreAnime(req: Request, res: Response) {
  try {
    const genre = await axios.get(
      "https://api.jikan.moe/v4/genres/anime?filter=genres"
    );
    genre.data.data.map(async (item: any) => {
      const genreId = item.mal_id;
      const scraper = new GenreScraper();
      try {
        const animeList = await scraper.scrapeGenre(
          `https://myanimelist.net/anime/genre/${genreId}`,
          genreId
        );
        const animeRepository = dataSource.getRepository(Anime);
        await animeRepository.save(animeList);
      } catch (error) {
        console.log(error);
      }
    });
    return res.status(200).json({ message: "anime list updated" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "can't update anime list" });
  }
}

export async function getGenreAnime(req: Request, res: Response) {
  const genreId = parseInt(req.params.id);
  try {
    const animeRepository = dataSource.getRepository(Anime);
    const response = await animeRepository.find({
      where: { genre_id: genreId },
    });
    return res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Not found");
  }
}
