import express from "express";
import db from "../db.js";
import { validateWarehouse } from "../utils/validator.js"; // Note the plural 'validators'
import logger from "../utils/logger.js";

const warehouseRoutes = express.Router();

// Existing GET route
warehouseRoutes.get("/", async (_req, res) => {
  try {
    const data = await db("warehouses");
    res.status(200).json(data);
  } catch (err) {
    logger.error("Error retrieving warehouses:", err);
    res.status(400).json({ error: `Error retrieving data: ${err.message}` });
  }
});

// Updated POST route to create a warehouse
warehouseRoutes.post("/", async (req, res) => {
  const { error, value } = validateWarehouse(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const [newWarehouseId] = await db("warehouses").insert(value);
    
    const newWarehouse = await db("warehouses").where({ id: newWarehouseId }).first();
    
    res.status(201).json(newWarehouse);
  } catch (err) {
    logger.error("Error creating warehouse:", err);
    res.status(500).json({ error: "An error occurred while creating the warehouse" });
  }
});

export default warehouseRoutes;