import dotenv from 'dotenv';
// import { resolve } from 'path';

dotenv.config();

import express from 'express';
import Cors from 'cors';
// import Helmet from 'helmet';

import home from './routes/home';
import state from './routes/state';
import city from './routes/city';
import level from './routes/level';

import 'regenerator-runtime';

const whiteList = [
  'http://localhost:3001',
  'http://127.0.0.1:5500',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(Cors(corsOptions));
    // this.app.use(Helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/city', city);
    this.app.use('/state', state);
    this.app.use('/level', level);
  }
}

export default new App().app;
