import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const warehouse_routes = express.Router();

warehouse_routes.get("/", async (_req, res) => {
  try {
    const data = await knex("warehouses");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving data: ${err}`);
  }
});

export default warehouse_routes