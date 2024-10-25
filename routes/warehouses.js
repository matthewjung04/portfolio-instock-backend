import express from "express";
import * as warehouseController from "../controllers/warehouse-controller.js"

const warehouseRoutes = express.Router();

warehouseRoutes.route("/")
  .get(warehouseController.getWarehouses)
  .post(warehouseController.addNewWarehouse)

warehouseRoutes.route("/:id")
  .get(warehouseController.getSingleWarehouse)
  .put(warehouseController.editWarehouse)
  .delete(warehouseController.deleteWarehouse)
  
warehouseRoutes.route("/:id/inventories")
  .get(warehouseController.getWarehouseInventory)

export default warehouseRoutes;