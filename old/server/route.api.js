/**
 * Created by hayden on 4/6/17.
 */
var caseStudyController = require("./controller/case-study.controller");
var express = require("express");
var path = require("path");

var router = express.Router();

// API end points
router.route("/case-studies/")
    .get(function(req, res){
        caseStudyController.read(req, res);
    })
    .post(function(req, res) {
        caseStudyController.create(req, res);
        res.status(200).end();
    });

module.exports = router;