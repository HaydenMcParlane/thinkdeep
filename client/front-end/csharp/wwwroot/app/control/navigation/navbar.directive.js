(function(){
angular.module("thinkdeep.core").directive("navbar", NavigationBar);

function NavigationBar(){
    return {
        restrict: "E",
        templateUrl: "static/navbar.html"
    };
}
}());