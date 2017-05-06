/**
 * Created by hayden on 4/6/17.
 */
var model = require("../model.js");

var CaseStudy = model.CaseStudy;

exports.create = function (req, res) {
    var entry = new CaseStudy({
        name: req.body.name
    });
    // TODO: Add callback to save for error handling.
    entry.save();
};

exports.read = function(req, res){
    CaseStudy.find(function (err, caseStudies) {
        if (err)
            res.status(500).send(err);
        else{
            res.status(200).send(caseStudies);
        }
    });
}