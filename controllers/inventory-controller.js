import expressAsyncHandler from 'express-async-handler';
import db from '../db.js';
import { validateInventory } from "../utils/validators.js";
import loggerInventory from "../utils/logger.js";

/* GET all inventories with their Warehouse names */
export const getInventory = expressAsyncHandler( async (req, res) => {
  try {
    const data = await db("inventories")
      .join("warehouses", "warehouses.id", "inventories.warehouse_id"); //JOINS Warehouses and Inventories tables to access Warehouse Name when getting the inventories 

    res.status(200).json(data.map((inventoryDetails) => ({  //Creates an object containing the inventory information and the warehouse name
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
})

export const getSingleInventory = expressAsyncHandler( async (req, res) => {
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
})

export const addInventory = expressAsyncHandler( async (req, res) => {
  const { error, value } = validateInventory(req.body);
  if (error) {
    return res.status(400).json({ error: error.details.map(detail => detail.message) });
  }
  try {
    const [newInventoryId] = await db("inventories").insert(value);
    const newInventory = await db("inventories").where({ id: newInventoryId }).first();
    res.status(201).json(newInventory);
  } catch (err) {
    loggerInventory.error("Error creating inventory:", err);
    res.status(500).json({ error: `An error occurred while creating the inventory: ${err.message}` });
  }
})

export const editInventory = expressAsyncHandler( async (req, res) => {
  const { id } = req.params;
  const { error, value } = validateInventory(req.body);
  if (error) {
    return res.status(400).json({ error: error.details.map(detail => detail.message) });
  }
  try {
    const inventoryExists = await db("inventories").where({ id }).first();
    if (!inventoryExists) {
      return res.status(404).json({ message: "Inventory not found." });
    }
    await db("inventories").where({ id }).update(value);
    const updatedInventory = await db("inventories").where({ id }).first();
    res.status(200).json(updatedInventory);
  } catch (err) {
    loggerInventory.error("Error updating inventory:", err);
    res.status(500).json({ error: `An error occurred while updating the inventory: ${err.message}` });
  }
})

export const deleteInventory = expressAsyncHandler ( async (req, res) => {
  const { id } = req.params;
  try {
    const deleteInventory = await db("inventories")
      .where({ id }).delete();
      if(!deleteInventory) {
        return res.status(404).json( { error: `Inventory with ID ${id} not found` });
      }
      res.sendStatus(204);
    }
    
  catch(error) {
    res.status(500).json({
      error: `Unable to delete inventory: ${error}`
    });
  }
})