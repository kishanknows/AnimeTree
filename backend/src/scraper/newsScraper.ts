import axios from "axios";
import cheerio from "cheerio";
import { News } from "../entities/News";

export class NewsScraper {
  async scrapeNews(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const data = $(".herald.box.news.t-news").get();

    const newsList = [] as News[];

    for (let element of data) {
      const id = $(element).attr("data-topics")?.split(" ")[0];
      const headline = $(element).find(".wrap > div > h3 > a").text().trim();
      const thumbnail = $(element).find(".thumbnail").attr("data-src");
      const url = $(element).find(".wrap > div > h3 > a").attr("href");
      const timePosted = $(element)
        .find(".wrap > div .byline > time")
        .text()
        .trim();
      const hook = $(element).find(".wrap > div > div > .hook").text().trim();
      // const full = $(element).find(".wrap > div > div > .full").text().trim();

      const news = new News();
      news.id = id ? id : "";
      news.headline = headline;
      news.thumbnail = `https://cdn.animenewsnetwork.com${thumbnail}`;
      news.url = `https://www.animenewsnetwork.com${url}`;
      news.time_posted = timePosted;
      news.hook = hook;
      news.full = await this.scrapeFullNews(news.url);

      newsList.push(news);
    }
    return newsList;
  }

  async scrapeFullNews(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);
    $("figure").remove();

    const data = $(".meat").text().trim();
    return data;
  }
}
