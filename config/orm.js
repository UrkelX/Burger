// Import MySQL connection.
const connection = require("../config/connection.js");


// Object for all our SQL statement functions.
let orm = {
  selectAll: function(tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(tableInput, cols, vals, cb) {
    let queryString = `INSERT INTO ${tableInput} (${cols}) VALUES ("${vals}");`;

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(tableInput, objColVals, boolean, condition, cb) {
    let queryString = `UPDATE ${tableInput} SET ${objColVals} = ${boolean} WHERE ${condition};`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteOne: function(tableInput, condition, cb) {
    let queryString = `DELETE FROM ${tableInput} WHERE ${condition};`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
