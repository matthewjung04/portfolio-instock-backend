import express from 'express';
import * as inventoryController from "../controllers/inventory-controller.js"

const inventoryRoutes = express.Router();

inventoryRoutes.route("/")
  .get(inventoryController.getInventory)    // Supports sorting (#32) and search (#34)
  .post(inventoryController.addInventory)   // Ticket #28

inventoryRoutes.route("/:id")
  .get(inventoryController.getSingleInventory)
  .put(inventoryController.editInventory)   // Ticket #29
  .delete(inventoryController.deleteInventory) // Ticket #30

export default inventoryRoutes;