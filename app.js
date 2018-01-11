var app = angular.module('location',['ngRoute', 'locationservice']);
app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/test",{
        templateUrl:"test.html"
    })
    .otherwise({
        redirectTo: '/'
      });
})
app.controller('mainCtrl',['$scope', 'viewLocation', '$window', function($scope,viewLocation, $window){
    $scope.thearray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    
  
  $window.onhashchange=function(){
      
      console.log("sds")
      
  }
    viewLocation.getConten();
 
   
}])
app.directive("innercontent", function(){
    return{
        restrict:"AE",
        scope:{
            data:"="
        },
        link:function(scope, elem,attr){
            
        },
        templateUrl:"innercontent.html"
    }
})