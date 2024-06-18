import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { News } from "../entities/News";
import { User } from "../entities/Users";

const port = process.env.DB_PORT as number | undefined;

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [News, User],
  synchronize: true,
  logging: false,
});
