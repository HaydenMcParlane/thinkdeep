/**
 * Created by hayden on 4/4/17.
 */
/*jslint node: true*/
"use strict";
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thinkdeep");

// var Product = mongoose.model("Product", {name: String});
// app.get("/", function (req, res){
//     Product.find(function (err, products) {
//         res.send(products);
//     });
// });

var CaseStudy = mongoose.model("CaseStudy", {name: String});
app.get("/case-studies", function(req, res){
    CaseStudy.find(function (err, caseStudies) {
        res.send(caseStudies);
    });
});

app.listen(3000);
