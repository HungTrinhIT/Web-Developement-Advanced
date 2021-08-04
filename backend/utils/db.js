require("dotenv").config();
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "elearning",
    port: process.env.DB_PORT,
  },
  pool: { min: 0, max: 50 },
});

module.exports = knex;
