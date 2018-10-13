(function () {
    'use strict';
    
    angular.module('Assignment1App',[])
    .controller('Controller1', Controller1);

    Controller1.$inject = ['$scope'];
    function Controller1($scope) {

        $scope.click = function(){
            var source = angular.element(document.getElementById("lunch-menu"));
            var value = 0;
            var length = source.val().trim().split(",").length;
            source = source.val().trim().split(",").filter(function (el) {
                return el != "";
            });
            var length = source.length;
            if(length == 0)
            {
                $scope.result = "Please enter data first";
            }
            else if(length <= 3)
            {
                    $scope.result = "Enjoy!";
            }
            else{
                $scope.result = "Too much!";
            }
        }
    }
})();