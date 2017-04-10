/**
 * Created by hayden on 4/4/17.
 */
/*jslint node: true*/

"use strict";

var bodyParser = require("body-parser");
var db = require("./server/db");
var express = require("express");
var path = require("path");
var apiRoutes = require("./server/route.api.js");
var viewRoutes = require("./server/route.view.js");

var app = express();

// Allows for differentiation of dev, stage
// and prod deployments
app.set("port", process.env.PORT || 3000);

app.use(bodyParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/node_modules")));
app.use("/api", apiRoutes);
app.use("/", viewRoutes);

db.connect("mongodb://localhost/thinkdeep");

app.listen(app.get("port"));
