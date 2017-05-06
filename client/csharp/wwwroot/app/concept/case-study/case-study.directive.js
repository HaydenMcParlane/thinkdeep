(function(){
    angular.module("thinkdeep.core").directive("caseStudy", function(){
        return {
            restrict: "E",
            templateUrl: "static/case-study.html",
            controller: "CaseStudyController",
            controllerAs: "vm"
        };
    });
}());