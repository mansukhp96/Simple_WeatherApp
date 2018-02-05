
var myApp = angular.module("weatherApp",[]);
var details ;
myApp.controller("weatherController", function($scope, $http){
    var vm = $scope;
    cityName = "Current Location";
    $http({
        method: 'get', 
        url: 'http://ip-api.com/json'
    }).then(function (response) {
        vm.lat = response.data.lat;
        vm.lon = response.data.lon;
      var apiKey = "a591de92adcf5e271f5f78169919386f";
      var owu = "http://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat+ "&lon="+vm.lon+ "&appid=" +apiKey;
        //console.log(owu);
    $http({
        method: 'get', 
        url: owu
    }).then(function (response) {
      var apiKey = "a591de92adcf5e271f5f78169919386f";
      var owu = "http://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat+ "&lon="+vm.lon+ "&appid=" +apiKey;
        //console.log(owu);
        $scope.temperature = response.data.main.temp;
         document.write(cityName);
         document.write("<br>");
         document.write(vm.temperature - 273 +" Celsius");
    });
})
});