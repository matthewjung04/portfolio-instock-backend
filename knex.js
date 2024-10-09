import "dotenv/config";

const knexConfig = {
  development: {
    client: "mysql2",
    connection: {
      database: process.env.DB_LOCAL_DBNAME,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      host: "127.0.0.1",
      port: 3306,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default knexConfig;
