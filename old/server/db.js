/**
 * Created by hayden on 4/6/17.
 */

var mongoose = require("mongoose");

function connect(connectionString){
    // mongoose.connect("mongodb://localhost/thinkdeep");
    mongoose.connect(connectionString);
}

module.exports = {
    connect: connect
}