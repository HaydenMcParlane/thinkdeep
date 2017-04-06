/**
 * Created by hayden on 4/6/17.
 */
var caseStudyController = require("./controller/case-study.controller");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
   res.render(express.static("../public/index.html"), {title: "ThinkDeep"});
});

router.post("/case-studies", function(req, res) {
    return caseStudyController.create(req, res);
    //res.redirect("/");
});

router.get("/case-studies", function(req, res){
    return caseStudyController.read(req, res);
});

module.exports = router;