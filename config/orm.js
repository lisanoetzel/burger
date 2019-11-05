// Functions taking inputs / conditions and turning them into SQL DB commands.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];
  //looping through array
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // values is an array saved in columns
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
        console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals: {burger_name: Buffalo Burger, devoured: true}
  update: function(table, objColVals, condition, cb) {
    
    var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

            console.log(queryString);
            connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            });
  }
};

module.exports = orm;