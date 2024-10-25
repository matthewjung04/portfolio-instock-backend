import expressAsyncHandler from 'express-async-handler';
import db from '../db.js';
import { validateInventory } from "../utils/validators.js";
import loggerInventory from "../utils/logger.js";

export const getInventory = expressAsyncHandler(async (req, res) => {
  try {
    const data = await db("inventories")
      .join("warehouses", "warehouses.id", "inventories.warehouse_id")
      .select(
        'inventories.id as inventoryId',
        'inventories.item_name',
        'inventories.category',
        'inventories.status',
        'inventories.quantity',
        'warehouses.warehouse_name'
      );
    res.status(200).json(data.map((inventoryDetails) => ({
      id: inventoryDetails.inventoryId,
      itemName: inventoryDetails.item_name,
      category: inventoryDetails.category,
      status: inventoryDetails.status,
      quantity: inventoryDetails.quantity,
      warehouseName: inventoryDetails.warehouse_name
    })));
  } catch (err) {
    loggerInventory.error("Error retrieving inventories:", err);
    res.status(400).json({ error: `Error retrieving data: ${err.message}` });
  }
});

export const getSingleInventory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await db("inventories").where({ id }).first();
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.status(200).json(inventory);
  } catch (err) {
    loggerInventory.error("Error retrieving inventory:", err);
    res.status(500).json({ error: `Error retrieving inventory: ${err.message}` });
  }
});

export const addInventory = expressAsyncHandler(async (req, res) => {
  // Validate request body
  const { error, value } = validateInventory(req.body);
  if (error) {
    return res.status(400).json({ 
      error: "Validation failed",
      details: error.details.map(detail => detail.message) 
    });
  }

  try {
    // Check if warehouse exists
    const warehouse = await db("warehouses")
      .where({ id: value.warehouse_id })
      .first();
    
    if (!warehouse) {
      return res.status(400).json({ 
        error: `Warehouse with ID ${value.warehouse_id} does not exist`
      });
    }

    // Insert new inventory item
    const [newInventoryId] = await db("inventories").insert(value);
    const newInventory = await db("inventories")
      .where({ id: newInventoryId })
      .first();

    res.status(201).json(newInventory);
  } catch (err) {
    loggerInventory.error("Error creating inventory:", err);
    res.status(500).json({ 
      error: `An error occurred while creating the inventory: ${err.message}` 
    });
  }
});

export const editInventory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  // Validate request body
  const { error, value } = validateInventory(req.body);
  if (error) {
    return res.status(400).json({ 
      error: "Validation failed",
      details: error.details.map(detail => detail.message) 
    });
  }

  try {
    // Check if inventory exists
    const inventoryExists = await db("inventories")
      .where({ id })
      .first();
    
    if (!inventoryExists) {
      return res.status(404).json({ message: "Inventory not found" });
    }

    // Check if warehouse exists
    const warehouse = await db("warehouses")
      .where({ id: value.warehouse_id })
      .first();
    
    if (!warehouse) {
      return res.status(400).json({ 
        error: `Warehouse with ID ${value.warehouse_id} does not exist`
      });
    }

    // Update inventory
    await db("inventories")
      .where({ id })
      .update(value);

    // Get updated inventory
    const updatedInventory = await db("inventories")
      .where({ id })
      .first();

    res.status(200).json(updatedInventory);
  } catch (err) {
    loggerInventory.error("Error updating inventory:", err);
    res.status(500).json({ 
      error: `An error occurred while updating the inventory: ${err.message}` 
    });
  }
});

export const deleteInventory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  
  try {
    // Check if inventory exists before attempting to delete
    const inventoryExists = await db("inventories")
      .where({ id })
      .first();

    if (!inventoryExists) {
      loggerInventory.error(`Attempt to delete non-existent inventory with ID: ${id}`);
      return res.status(404).json({ 
        message: `Inventory with ID ${id} not found` 
      });
    }

    // Delete the inventory item
    await db("inventories")
      .where({ id })
      .delete();

    // Return 204 No Content for successful deletion
    res.status(204).send();
    
  } catch (error) {
    loggerInventory.error(`Error deleting inventory ${id}:`, error);
    res.status(500).json({
      error: `Unable to delete inventory: ${error.message}`
    });
  }
});