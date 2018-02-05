
var myApp = angular.module("weatherApp",[]);
var details ;
myApp.controller("weatherController", function($scope){
    $scope.cityName = "";    
      var apiKey = "a591de92adcf5e271f5f78169919386f";
      var owu = "api.openweathermap.org/data/2.5/weather?q="+ cityName;
      console.log(owu, 'res');
});