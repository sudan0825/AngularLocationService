var app = angular.module('location',['locationservice']);
app.controller('mainCtrl', function($scope,viewLocation){
    $scope.thearray=[1,2,,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    
   function myFunction() {
    window.scrollBy(100, 100);
    alert("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset);
}
   var elem = document.getElementById("#container");
    console.log(elem);
//    elem.addEventListener('click',function(e){
//        alert(e.target.innerHTML);
//    });
})