/**
 * Created by hayden on 4/4/17.
 */
( function (){
    "use strict";

    var landing = angular.module("thinkdeep", [])
        .controller("LandingController", LandingController);

    LandingController.$inject = ["$scope", "$http"];

    function LandingController($scope, $http) {
        var app = $scope;
        $http.get("http://localhost:3000/api/case-studies")
            .then(function(err, caseStudies){
                app.caseStudies = caseStudies.data;
            }, function (error) {
                console.log(error);
            });
    }
}());