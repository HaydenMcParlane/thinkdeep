/**
 * Created by hayden on 4/4/17.
 */
/*jslint node: true*/
"use strict";
var cors = require("cors");
var db = require("./db");
var express = require("express");
var bodyParser = require("body-parser");
var router = require("./route");

var app = express();

app.use(bodyParser());
app.use("/", router);

db.connect("mongodb://localhost/thinkdeep");

app.listen(3000);
