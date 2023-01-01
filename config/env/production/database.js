const path = require("path");

module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql",
      connection: {
        host: "localhost:3306",
        database: "hautlogic",
        user: "root",
        password: "Israr@123",
        port: 3306,
        ssl: false,
      },
      debug: true,
    },
  };
};
