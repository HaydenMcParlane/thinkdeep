/**
 * Created by hayden on 4/4/17.
 */
/*jslint node: true*/
"use strict";
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors())

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thinkdeep");

var Product = mongoose.model("Product", {name: String});
app.get("/", function (req, res){
    Product.find(function (err, products) {
        res.send(products);
    });
});

app.listen(3000);
