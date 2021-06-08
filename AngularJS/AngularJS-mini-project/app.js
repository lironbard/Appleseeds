var app = angular.module("myList", []);
app.controller("myListController", function ($scope) {
  $scope.items = ["Box", "Ball", "Crowbar", "Pen"];
  $scope.newItem = "";
  if ($scope.newItem != "") {
    $scope.pushItem = function () {
      $scope.items.push($scope.newItem);
      $scope.newItem = "";
    };
  }
});
