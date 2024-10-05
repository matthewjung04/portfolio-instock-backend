import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const ORIGIN = process.env.ORIGIN;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({ PORT, ORIGIN }));

app.use((req, res, next) => {
  next();
});

