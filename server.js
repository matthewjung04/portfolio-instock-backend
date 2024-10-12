import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import warehouseRoutes from './routes/warehouses.js';
import inventoryRoutes from './routes/inventories.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Root route - handles requests to the root URL (http://localhost:8080/)
app.get('/', (req, res) => {
  res.send('Welcome to the InStock API!');
});

// Routes for warehouses and inventories
app.use("/api/warehouses", warehouseRoutes);
app.use("/api/inventories", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
