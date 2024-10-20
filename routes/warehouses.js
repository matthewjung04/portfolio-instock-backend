import express from "express";
import * as warehouseController from "../controllers/warehouse-controller.js"

const warehouseRoutes = express.Router();

warehouseRoutes.route("/")
  .get(warehouseController.getWarehouses) /* GET all warehouses */
  .post(warehouseController.addNewWarehouse) /* POST new warehouse */

warehouseRoutes.route("/:id")
  .get(warehouseController.getSingleWarehouse) /* GET single warehouse by ID */
  .put(warehouseController.editWarehouse) /* PUT updated warehouse */
  .delete(warehouseController.deleteWarehouse) /* DELETE a warehouse */
  
warehouseRoutes.route("/:id/inventories")
  .get(warehouseController.getWarehouseInventory) /* GET list of inventory items by warehouse ID */

export default warehouseRoutes;