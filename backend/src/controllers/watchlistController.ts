import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { Watchlist } from "../entities/Watchlist";

export async function updateWatchlist(req: Request, res: Response) {
  try {
    const watchlistRepository = dataSource.getRepository(Watchlist);
    const watchlist = new Watchlist();
    watchlist.anime_id = req.body.anime_id;
    watchlist.user_id = req.body.user_id;
    watchlist.thumbnail = req.body.thumbnail;
    await watchlistRepository.save(watchlist);
    return res.status(200).json({ message: "watchlist updated" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "can't update watchlist" });
  }
}

export async function getWatchlist(req: Request, res: Response) {
  const userId = res.locals.currentUser.id;
  try {
    const watchlistRepository = dataSource.getRepository(Watchlist);
    const response = await watchlistRepository.find({
      where: { user_id: userId },
    });
    return res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Not found");
  }
}

export async function deleteWatchlist(req: Request, res: Response) {
  const user_id = req.body.user_id;
  const anime_id = parseInt(req.body.anime_id);
  console.log(user_id, anime_id);
  try {
    const watchlistRepository = dataSource.getRepository(Watchlist);
    const response = await watchlistRepository.delete({
      user_id: user_id,
      anime_id: anime_id,
    });
    return res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Unable to delete");
  }
}
