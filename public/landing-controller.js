/**
 * Created by hayden on 4/4/17.
 */
( function (){
    "use strict";

    var landing = angular.module("thinkdeep", [])
        .controller("LandingController", LandingController);

    LandingController.$inject = ["$scope", "CaseStudyService"];

    function LandingController($scope, CaseStudyService) {
        var app = $scope;

        CaseStudyService.getMany().then(function (caseStudies) {
            app.caseStudies = caseStudies;
        });
    }
}());