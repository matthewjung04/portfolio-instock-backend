import express from "express";
import db from "../db.js";
import { validateWarehouse } from "../utils/validators.js";
import logger from "../utils/logger.js";

const warehouseRoutes = express.Router();

// GET all warehouses
warehouseRoutes.get("/", async (_req, res) => {
  try {
    const data = await db("warehouses");
    res.status(200).json(data);
  } catch (err) {
    logger.error("Error retrieving warehouses:", err);
    res.status(400).json({ error: `Error retrieving data: ${err.message}` });
  }
});

// GET single warehouse by ID
warehouseRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const warehouse = await db("warehouses").where({ id }).first();
    if (!warehouse) {
      return res.status(404).json({ message: "Warehouse not found." });
    }
    res.status(200).json(warehouse);
  } catch (err) {
    logger.error("Error retrieving warehouse:", err);
    res.status(500).json({ error: `Error retrieving warehouse: ${err.message}` });
  }
});

// POST new warehouse
warehouseRoutes.post("/", async (req, res) => {
  const { error, value } = validateWarehouse(req.body);
  if (error) {
    return res.status(400).json({ error: error.details.map(detail => detail.message) });
  }
  try {
    const [newWarehouseId] = await db("warehouses").insert(value);
    const newWarehouse = await db("warehouses").where({ id: newWarehouseId }).first();
    res.status(201).json(newWarehouse);
  } catch (err) {
    logger.error("Error creating warehouse:", err);
    res.status(500).json({ error: `An error occurred while creating the warehouse: ${err.message}` });
  }
});

// PUT update warehouse
warehouseRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, value } = validateWarehouse(req.body);
  if (error) {
    return res.status(400).json({ error: error.details.map(detail => detail.message) });
  }
  try {
    const warehouseExists = await db("warehouses").where({ id }).first();
    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse not found." });
    }
    await db("warehouses").where({ id }).update(value);
    const updatedWarehouse = await db("warehouses").where({ id }).first();
    res.status(200).json(updatedWarehouse);
  } catch (err) {
    logger.error("Error updating warehouse:", err);
    res.status(500).json({ error: `An error occurred while updating the warehouse: ${err.message}` });
  }
});

