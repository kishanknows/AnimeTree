import { Request, Response } from "express";
import { GenreScraper } from "../scraper/genreScraper";

export async function getGenreAnime(req: Request, res: Response) {
  const scraper = new GenreScraper();
  try {
    const response = await scraper.scrapeGenre(
      `https://myanimelist.net${req.url}`
    );
    return res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Not found");
  }
}
