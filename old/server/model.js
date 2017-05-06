/**
 * Created by hayden on 4/6/17.
 */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Schemas
var caseStudySchema = new Schema({
    name: String
});

// Models
var CaseStudy = mongoose.model("CaseStudy", caseStudySchema, "CaseStudies");

// Exports
module.exports = {
    CaseStudy: CaseStudy
};