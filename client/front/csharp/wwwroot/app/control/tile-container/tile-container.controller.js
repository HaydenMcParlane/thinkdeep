(function(){
angular.module("thinkdeep.core").controller("TileContainerController", TileContainerController);

function TileContainerController(){
    var vm = this;

    vm.tiles = [];
    vm.tiles.push({        
        imagePath: "img/logo-13.svg"
    });
}

}());