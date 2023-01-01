const path = require("path");

module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql",
      connection: {
        host: "localhost",
        database: "hautlogic",
        user: "root",
        password: "Great1.8",
        port: 3306,
        ssl: false,
      },
      debug: true,
    },
  };
};
