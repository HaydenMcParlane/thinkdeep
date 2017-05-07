(function(){
angular.module("thinkdeep.core").controller("CarouselController", [ CarouselController ]);

function CarouselController(){
    var controller = this;
    this.carouselConcepts = [];
    this.carouselConcepts.push({
        image: {
            source: "img/logo-13.svg",
            description: "Think Deep Web Application"
        },
        slideTo: 0
    });
    this.carouselConcepts.push({
        image: {
            source: "img/logo-13.svg",
            description: "Think Deep Web Application"
        },
        slideTo: 1
    });
    this.carouselConcepts.push({
        image: {
            source: "img/logo-13.svg",
            description: "Think Deep Web Application"
        },
        slideTo: 2
    });
}

}());