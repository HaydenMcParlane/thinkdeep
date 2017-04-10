/**
 * Created by hayden on 4/9/17.
 */
var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function(req, res){
    res.sendFile(path.resolve("../public/index.html"));
});

module.exports = router;