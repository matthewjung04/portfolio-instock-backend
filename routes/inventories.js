import express from 'express';
import * as inventoryController from "../controllers/inventory-controller.js"

const inventoryRoutes = express.Router();

inventoryRoutes.route("/")
  .get(inventoryController.getInventory)
  .post(inventoryController.addInventory)

inventoryRoutes.route("/:id")
  .get(inventoryController.getSingleInventory)
  .put(inventoryController.editInventory)
  .delete(inventoryController.deleteInventory)

export default inventoryRoutes;