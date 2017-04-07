/**
 * Created by hayden on 4/6/17.
 */
var caseStudyController = require("./controller/case-study.controller");
var express = require("express");
var path = require("path");

var router = express.Router();

// Pages
router.get("/", function(req, res){
   res.sendFile(path.resolve("../public/index.html"));
});


// API end points
router.post("/api/case-studies", function(req, res) {
    caseStudyController.create(req, res);
    res.status(200).end();
});

router.get("/api/case-studies", function(req, res){
    caseStudyController.read(req, res);
});

module.exports = router;