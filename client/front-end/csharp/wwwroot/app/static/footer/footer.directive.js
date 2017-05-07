(function(){
angular.module("thinkdeep.core").directive("footer", Footer);

function Footer(){
    return {
        restrict: "E",
        templateUrl: "static/footer.html"
    };
}
}());