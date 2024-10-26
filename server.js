import "dotenv/config";
import express from 'express';
import cors from 'cors';
import warehouseRoutes from './routes/warehouses.js';
import inventoryRoutes from './routes/inventories.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Connection successful. Server is running.');
});

// API routes
app.use("/api/warehouses", warehouseRoutes);
app.use("/api/inventories", inventoryRoutes);

// Log that routes are registered
console.log("API routes registered");

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;