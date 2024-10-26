import expressAsyncHandler from "express-async-handler";
import db from "../db.js";
import { validateWarehouse } from "../utils/validators.js";

export const getWarehouses = expressAsyncHandler(async (req, res) => {
  try {
    const { sort_by, order_by = 'asc', s } = req.query;
    let query = db("warehouses");

    // Search functionality (Ticket #34)
    if (s) {
      query = query.where(function() {
        this.whereILike('warehouse_name', `%${s}%`)
            .orWhereILike('address', `%${s}%`)
            .orWhereILike('city', `%${s}%`)
            .orWhereILike('country', `%${s}%`)
            .orWhereILike('contact_name', `%${s}%`)
            .orWhereILike('contact_position', `%${s}%`)
            .orWhereILike('contact_email', `%${s}%`);
      });
    }

    // Sorting functionality (Ticket #32)
    if (sort_by) {
      query = query.orderBy(sort_by, order_by);
    }

    const data = await query;
    res.status(200).json(data);
  } catch (err) {
    console.error("Error retrieving warehouses:", err);
    res.status(400).json({ error: `Error retrieving data: ${err.message}` });
  }
});

export const getSingleWarehouse = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const warehouse = await db("warehouses").where({ id }).first();
    if (!warehouse) {
      return res.status(404).json({ message: "Warehouse not found" });
    }
    res.status(200).json(warehouse);
  } catch (err) {
    console.error("Error retrieving warehouse:", err);
    res.status(500).json({ error: `Error retrieving warehouse: ${err.message}` });
  }
});

// Ticket #27: GET warehouse inventories
export const getWarehouseInventory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { sort_by, order_by = 'asc', s } = req.query;
  
  try {
    // Check if warehouse exists
    const warehouse = await db("warehouses").where({ id }).first();
    if (!warehouse) {
      return res.status(404).json({ message: "Warehouse not found" });
    }

    let query = db("inventories")
      .where({ warehouse_id: id })
      .select('id', 'item_name', 'category', 'status', 'quantity');

    // Search functionality
    if (s) {
      query = query.where(function() {
        this.whereILike('item_name', `%${s}%`)
            .orWhereILike('category', `%${s}%`);
      });
    }

    // Sorting functionality
    if (sort_by) {
      query = query.orderBy(sort_by, order_by);
    }

    const inventory = await query;
    res.status(200).json(inventory);
  } catch (err) {
    console.error("Error retrieving warehouse inventory:", err);
    res.status(500).json({ error: `Error retrieving warehouse inventory: ${err.message}` });
  }
});

export const addNewWarehouse = expressAsyncHandler(async (req, res) => {
  const { error, value } = validateWarehouse(req.body);
  if (error) {
    return res.status(400).json({ error: error.details.map(detail => detail.message) });
  }
  try {
    const [newWarehouseId] = await db("warehouses").insert(value);
    const newWarehouse = await db("warehouses").where({ id: newWarehouseId }).first();
    res.status(201).json(newWarehouse);
  } catch (err) {
    console.error("Error creating warehouse:", err);
    res.status(500).json({ error: `An error occurred while creating the warehouse: ${err.message}` });
  }
});

export const editWarehouse = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { error, value } = validateWarehouse(req.body);
  if (error) {
    return res.status(400).json({ error: error.details.map(detail => detail.message) });
  }
  try {
    const warehouseExists = await db("warehouses").where({ id }).first();
    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse not found" });
    }
    await db("warehouses").where({ id }).update(value);
    const updatedWarehouse = await db("warehouses").where({ id }).first();
    res.status(200).json(updatedWarehouse);
  } catch (err) {
    console.error("Error updating warehouse:", err);
    res.status(500).json({ error: `An error occurred while updating the warehouse: ${err.message}` });
  }
});

export const deleteWarehouse = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWarehouse = await db("warehouses")
      .where({ id }).delete();
    if(!deleteWarehouse) {
      return res.status(404).json({ error: `Warehouse with ID ${id} not found` });
    }
    res.sendStatus(204);
  } catch(error) {
    console.error("Error deleting warehouse:", error);
    res.status(500).json({
      error: `Unable to delete warehouse: ${error}`
    });
  }
});