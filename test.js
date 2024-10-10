import knex from "knex";
import knexConfig from "./knex.js";

const db = knex(knexConfig.development);

db.raw("SELECT 1")
  .then(() => {
    console.log("Database connection successful");
    db.destroy();
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    db.destroy();
  });
