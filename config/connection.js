//MYSQL CONNECTION
var connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'@Fareilwebdesigner001',
    database: 'burgers_db'
});
    connection.connect(function(err){
            if(err)throw err;
              console.log("Connected as id: " + connection.threadID);
    });

    module.exports = connection;