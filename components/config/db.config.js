module.exports = {
  DB: "site-next-js",
  USER: "root",
  PASSWORD: "12345678",
  HOST: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
