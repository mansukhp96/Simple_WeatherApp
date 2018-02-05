var myApp = angular.module("weatherApp",[]);
myApp.controller("weatherController", function($scope,$http){
  var cityName;
  $scope.send = function(){
    $scope.Name = cityName;
    var apiKey = "a591de92adcf5e271f5f78169919386f";
    var owu = "http://api.openweathermap.org/data/2.5/weather?q="+ $scope.cityName+ "&appid=" +apiKey;
    //console.log(owu);
    $http({
    method: 'get', 
    url: owu
    }).then(function (response) {
      //console.log(response);
      $scope.temperature = response.data.main.temp;
      var tempf = $scope.temperature - 273;
      document.getElementById("city").innerHTML = $scope.cityName; 
      document.getElementById("tempf").innerHTML = tempf+"Celsius";
      });
  }   
});