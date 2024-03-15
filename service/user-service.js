const { response } = require("express");
const { Pool } = require("pg");
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const pgConfig = {
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    require: true,
  },
};

const pool = new Pool(pgConfig);

async function getUsers(data) {
  const client = await pool.connect();
  let response;
  try {
    response = await client.query("SELECT * FROM users");
  } catch (error) {
    throw new Error(error ? error.message : "Error");
  } finally {
    client.release();
  }
  return response.rows;
}

async function addUser(userInfo) {
  const client = await pool.connect();
  let response;
  try {
    response = await client.query(
      "INSERT INTO users (name, id, email, password) VALUES (${1, $2, $3",
      [userInfo.name, userInfo.email, userInfo.password]
    );
  } catch (error) {
    throw new Error(error ? error.message : "Error");
  } finally {
    client.release();
  }
  return response.rows;
}

async function createTable(data) {
  const client = await pool.connect();
  try {
    await client.query(
      "CREATE TABLE users (name VARCHAR(50), email VARCHAR(250), id VARCHAR(50))"
    );
  } catch (error) {
    throw new Error(error ? error.message : "Error");
  } finally {
    client.release();
  }
  return "success";
}

module.exports = {
  getUsers,
  addUser,
};
