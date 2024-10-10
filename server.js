import "dotenv/config";
import express from "express";
import warehouse_routes from "./routes/warehouses.js"
import inventory_routes from "./routes/inventories.js";
const app = express();

const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  next();
});

app.use("/warehouses", warehouse_routes);

app.use("/inventories", inventory_routes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});