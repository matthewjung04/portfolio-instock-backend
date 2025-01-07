import { parse } from 'url';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const dbUrl = process.env.JAWS_URL;
const dbConfig = parse(dbUrl);


export default {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root', 
      password: process.env.DB_PASSWORD || 'rootroot',
      database: process.env.DB_NAME || 'instock',
      charset: "utf8",
    },
    migrations: {
      directory: path.join(dirname, 'migrations'),
    },
    seeds: {
      directory: path.join(dirname, 'seeds'),
    },
  },
  production: {
    client: 'mysql2',
    connection: {
        host: dbConfig.hostname,
        port: dbConfig.port || 3306,
        user: dbConfig.auth.split(':')[0],
        password: dbConfig.auth.split(':')[1],
        database: dbConfig.pathname.slice(1),
      },

    migrations: {
      directory: path.join(dirname, 'migrations'),
    },

    seeds: {
      directory: path.join(dirname, 'seeds'),
    },
  },
};