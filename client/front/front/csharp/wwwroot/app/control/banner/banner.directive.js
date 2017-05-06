(function(){
angular.module("thinkdeep.core").directive("banner", Banner);

function Banner(){
    return {
        restrict: "E",
        templateUrl: "static/banner.html"
    };
}
}());