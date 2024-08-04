//routes
import example from './routes/example.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import pacienteRoutes from './routes/pacienteRoutes.js';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

class RouterController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json({ limit: '100mb', extended: true }));
    this.express.use(express.urlencoded({ limit: '100mb', extended: true }));
    this.express.use(cors());
  }

  routes() {
    this.express.use(`/`, example);
    this.express.use(`/`, authRoutes);
    this.express.use(`/`, userRoutes);
    this.express.use(`/`, pacienteRoutes);
  }
}

export default new RouterController().express;
