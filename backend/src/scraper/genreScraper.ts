import axios from "axios";
import cheerio from "cheerio";

interface GenreAnime {
  id: number;
  genre_id: number;
  title: string;
  thumbnail: string | undefined;
  synopsis: string;
  type: string;
  aired: string;
  eps: string;
}

export class GenreScraper {
  async scrapeGenre(url: string, genreId: number) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);
    const data = $(
      ".js-anime-category-producer.seasonal-anime.js-seasonal-anime.js-anime-type-all"
    ).get();
    const animeList: GenreAnime[] = [];
    for (let element of data) {
      const id = $(element).find(".genres.js-genre").attr("id");
      const title = $(element).find(".h2_anime_title > a").text().trim();
      const thumbnail = $(element).find(".image > a > img").attr("data-src");
      const synopsis = $(element)
        .find(".synopsis.js-synopsis > p")
        .text()
        .trim();
      const [type, aired, eps] = $(element).find(".info").children().get();
      animeList.push({
        id: parseInt(id ? id : ""),
        genre_id: genreId,
        title: title,
        thumbnail: thumbnail,
        synopsis: synopsis,
        type: $(type).text().trim(),
        aired: $(aired).text().trim(),
        eps: $(eps).text().trim(),
      });
    }
    return animeList;
  }
}
