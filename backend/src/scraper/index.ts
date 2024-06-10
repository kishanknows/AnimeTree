import axios from "axios";
import cheerio from "cheerio";

export interface News {
  headline: string;
  thumbnail: string | undefined;
  url: string | undefined;
  time_posted: string;
  hook: string;
  full: string;
}

export class NewsScraper {
  async scrapeNews(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const data = $(".herald.box.news.t-news").get();

    const newsList = [] as News[];

    for (let element of data) {
      const headline = $(element).find(".wrap > div > h3 > a").text().trim();
      const thumbnail = $(element).find(".thumbnail").attr("data-src");
      const url = $(element).find(".wrap > div > h3 > a").attr("href");
      const timePosted = $(element)
        .find(".wrap > div .byline > time")
        .text()
        .trim();
      const hook = $(element).find(".wrap > div > div > .hook").text().trim();
      const full = $(element).find(".wrap > div > div > .full").text().trim();
      const news: News = {
        headline: headline,
        thumbnail: `https://cdn.animenewsnetwork.com${thumbnail}`,
        url: `https://www.animenewsnetwork.com${url}`,
        time_posted: timePosted,
        hook: hook,
        full: full,
      };
      newsList.push(news);
    }
    return newsList;
  }
}
