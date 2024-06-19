import { dataSource } from "../config/db";
import { News } from "../entities/News";
import { NewsScraper } from "../scraper/newsScraper";
import { Request, Response } from "express";

export async function updateNews(req: Request, res: Response) {
  const scraper = new NewsScraper();
  const newsList = await scraper.scrapeNews(
    "https://www.animenewsnetwork.com/news/"
  );
  try {
    const newsRepository = dataSource.getRepository(News);
    await newsRepository.save(newsList);
    return res.send("news updated");
  } catch (error) {
    console.log(error);
    return res.status(400).send("Failed to update news");
  }
}

export async function getNews(req: Request, res: Response) {
  try {
    const newsRepository = dataSource.getRepository(News);
    const response = await newsRepository.find();
    return res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Not found");
  }
}
