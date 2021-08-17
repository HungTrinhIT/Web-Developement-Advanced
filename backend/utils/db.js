require("dotenv").config();
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "bsdaerp2ffrwzpci30qa-mysql.services.clever-cloud.com",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  pool: { min: 0, max: 5 },
});

module.exports = knex;
