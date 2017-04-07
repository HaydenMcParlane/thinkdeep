/**
 * Created by hayden on 4/4/17.
 */
/*jslint node: true*/
"use strict";
var cors = require("cors");
var db = require("./db");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = require("./route");

var app = express();

// app.use(cors());
app.use(bodyParser());
app.use("/", router);
app.use("/bower_components", express.static(path.join(__dirname, "/bower_components")));
app.use(express.static(path.join(__dirname, "/public")));

db.connect("mongodb://localhost/thinkdeep");

app.listen(3000);
