import express, { Express } from "express";
import { dataSource } from "./config/db";
import { routes } from "./routes";
import { refreshNews } from "./utils/refresh-news";

dataSource.initialize().then(() => {
  const app: Express = express();

  app.use(express.json());
  app.use("/", routes);

  return app.listen(process.env.PORT, () => {
    //update news in the database every 10 minutes
    setInterval(refreshNews, 600000);

    console.log(
      `[server]: Server is running on http://localhost:${process.env.PORT}`
    );
  });
});
