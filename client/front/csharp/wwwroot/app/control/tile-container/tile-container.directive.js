(function(){
angular.module("thinkdeep.core").directive("tileContainer", TileContainer);

function TileContainer(){
    return {
        restrict: "E",
        controller: "TileContainerController",
        controllerAs: "vm",
        templateUrl: "static/tile-container.html"
    };
}
}());