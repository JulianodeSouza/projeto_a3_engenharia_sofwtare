import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: process.env.DB_LOGGING === "true" ? console.log : false,
});

export default sequelize;
