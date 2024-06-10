import express, { Express, Request, Response } from "express";
import { dataSource } from "./data-source";
import { News } from "./entities/News";
import { NewsScraper } from "./scraper";

dataSource.initialize().then(() => {
  const app: Express = express();
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    return res.json("Established connection!");
  });

  app.post("/anime/news", async (req: Request, res: Response) => {
    const scraper = new NewsScraper();
    const newsList = await scraper.scrapeNews(
      "https://www.animenewsnetwork.com/news/"
    );
    try {
      await dataSource
        .createQueryBuilder()
        .insert()
        .into(News)
        .values(newsList)
        .execute();
      res.send("news updated");
    } catch (error) {
      res.status(400).send("Failed to update news");
      console.log(error);
    }
  });

  app.get("/anime/news", async (req: Request, res: Response) => {
    try {
      const response = await dataSource
        .createQueryBuilder()
        .select("news")
        .from(News, "news")
        .getMany();
      res.send(response);
    } catch (error) {
      res.send(404).send("Not found");
      console.log(error);
    }
  });

  return app.listen(process.env.PORT, () => {
    console.log(
      `[server]: Server is running on http://localhost:${process.env.PORT}`
    );
  });
});
