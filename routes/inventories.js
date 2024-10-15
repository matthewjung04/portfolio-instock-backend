import express from 'express';
import db from '../db.js';

const inventoryRoutes = express.Router();

inventoryRoutes.get("/", async (_req, res) => {
  try {
    const data = await db("inventories");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: `Error retrieving data: ${err.message}` });
  }
});

export default inventoryRoutes;  