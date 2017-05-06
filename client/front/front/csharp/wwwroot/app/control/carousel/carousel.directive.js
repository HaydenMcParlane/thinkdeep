(function(){
angular.module("thinkdeep.core").directive("carousel", CarouselDirective);

function CarouselDirective(){
    return {
        "restrict" : "E",
        "scope" : {

        },
        "controller" : "CarouselController",
        "controllerAs" : "vm",
        "templateUrl" : "static/carousel.html"
    };
}
}());