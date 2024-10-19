import express from 'express';
import db from '../db.js';
import { validateInventory } from "../utils/validators.js";
import loggerInventory from "../utils/logger.js";

const inventoryRoutes = express.Router();

// GET all inventories
inventoryRoutes.get("/", async (_req, res) => {
  try {
    const data = await db("inventories");
    res.status(200).json(data);
  } catch (err) {
    loggerInventory.error("Error retrieving inventories:", err);
    res.status(400).json({ error: `Error retrieving data: ${err.message}` });
  }
});

// GET single inventory item by ID
inventoryRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await db("inventories").where({ id }).first();
    if (!inventory) {
      return res.status(404).json({ message: "inventory not found." });
    }
    res.status(200).json(inventory);
  } catch (err) {
    loggerInventory.error("Error retrieving inventory:", err);
    res.status(500).json({ error: `Error retrieving inventory: ${err.message}` });
  }
});

export default inventoryRoutes;
