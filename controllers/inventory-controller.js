import expressAsyncHandler from 'express-async-handler';
import db from '../db.js';
import { validateInventory } from "../utils/validators.js";

export const getInventory = expressAsyncHandler(async (req, res) => {
  try {
    const { sort_by, order_by = 'asc', s } = req.query;
    let query = db("inventories")
      .join("warehouses", "warehouses.id", "inventories.warehouse_id")
      .select(
        'inventories.id as inventoryId',
        'inventories.item_name',
        'inventories.description',
        'inventories.category',
        'inventories.status',
        'inventories.quantity',
        'warehouses.warehouse_name'
      );

    // Search functionality (Ticket #34)
    if (s) {
      query = query.where(function() {
        this.whereILike('inventories.item_name', `%${s}%`)
            .orWhereILike('inventories.category', `%${s}%`)
            .orWhereILike('inventories.description', `%${s}%`)
            .orWhereILike('warehouses.warehouse_name', `%${s}%`);
      });
    }

    // Sorting functionality (Ticket #32)
    if (sort_by) {
      const columnName = sort_by.includes('.') ? sort_by : `inventories.${sort_by}`;
      query = query.orderBy(columnName, order_by);
    }

    const data = await query;
    
    res.status(200).json(data.map((item) => ({
      id: item.inventoryId,
      itemName: item.item_name,
      description: item.description,
      category: item.category,
      status: item.status,
      quantity: item.quantity,
      warehouseName: item.warehouse_name
    })));
  } catch (err) {
    console.error("Error retrieving inventories:", err);
    res.status(400).json({ error: `Error retrieving data: ${err.message}` });
  }
});

// Ticket #28: POST/CREATE new inventory
export const addInventory = expressAsyncHandler(async (req, res) => {
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

    const [newInventoryId] = await db("inventories").insert(value);
    const newInventory = await db("inventories")
      .where({ id: newInventoryId })
      .first();

    res.status(201).json(newInventory);
  } catch (err) {
    console.error("Error creating inventory:", err);
    res.status(500).json({ 
      error: `An error occurred while creating the inventory: ${err.message}` 
    });
  }
});

// Ticket #29: PUT/EDIT inventory
export const editInventory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  
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

    await db("inventories")
      .where({ id })
      .update(value);

    const updatedInventory = await db("inventories")
      .where({ id })
      .first();

    res.status(200).json(updatedInventory);
  } catch (err) {
    console.error("Error updating inventory:", err);
    res.status(500).json({ 
      error: `An error occurred while updating the inventory: ${err.message}` 
    });
  }
});

// Ticket #30: DELETE inventory
export const deleteInventory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  
  try {
    const inventoryExists = await db("inventories")
      .where({ id })
      .first();

    if (!inventoryExists) {
      console.error(`Attempt to delete non-existent inventory with ID: ${id}`);
      return res.status(404).json({ 
        message: `Inventory with ID ${id} not found` 
      });
    }

    await db("inventories")
      .where({ id })
      .delete();

    res.status(204).send();
  } catch (error) {
    console.error(`Error deleting inventory ${id}:`, error);
    res.status(500).json({
      error: `Unable to delete inventory: ${error.message}`
    });
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
    console.error("Error retrieving inventory:", err);
    res.status(500).json({ error: `Error retrieving inventory: ${err.message}` });
  }
});