/**
 * Created by hayden on 4/9/17.
 */
(function(){

    "use strict";

   angular.module("thinkdeep").service("CaseStudyService", CaseStudyService);

    CaseStudyService.$inject = ["$http", "$q"];

    function CaseStudyService($http, $q){
        var service = this;
        service.getMany = getMany;

        function getMany(){
            return $http.get("http://localhost:3000/api/case-studies/")
                .then(function (res, err) {
                    if (err){
                        // TODO: Handle error with reusable, centralized logging service.
                        console.log(err);
                    }
                    var caseStudies = res.data;
                    return caseStudies;
                });
        }

        // TODO: Use ngResource
        // var api = $resource("/api/case-studies", null,
        //     {"getMany": {"method": "GET", "isArray": true}});
    }

}());