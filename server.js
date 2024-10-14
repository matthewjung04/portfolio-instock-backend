import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import warehouseRoutes from './routes/warehouses.js';
import inventoryRoutes from './routes/inventories.js';
import logger from './utils/logger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Add this root route
app.get('/', (req, res) => {
  res.send('Connection successful. Server is running.');
});

app.use("/api/warehouses", warehouseRoutes);
app.use("/api/inventories", inventoryRoutes);

// Log that routes are registered
console.log("API routes registered");

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;