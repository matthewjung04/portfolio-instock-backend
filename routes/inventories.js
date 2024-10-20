import express from 'express';
import * as inventoryController from "../controllers/inventory-controller.js"

const inventoryRoutes = express.Router();

// GET all inventories
inventoryRoutes.route("/")
  .get(inventoryController.getInventory) /* GET all inventories */
  .post(inventoryController.addInventory) /* POST new inventory */

inventoryRoutes.route("/:id")
  .get(inventoryController.getSingleInventory) /* GET single inventory item by ID */
  .put(inventoryController.editInventory) /* PUT updated inventory */
  .delete(inventoryController.deleteInventory) /* DELETE an inventory */

export default inventoryRoutes;
