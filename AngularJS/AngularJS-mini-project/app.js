var app = angular.module("myList", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "myListController",
      templateUrl: "views/myList.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});

// app.controller("myListController", [
//   "$scope", // Instead of using $inject
//   function ($scope) {
//     $scope.items = ["Box", "Ball", "Crowbar", "Pen"];
//     $scope.newItem = "";

//     $scope.pushItem = function () {
//       if ($scope.newItem !== "") {
//         $scope.items.push($scope.newItem);
//         $scope.newItem = "";
//       }
//     };

//     $scope.deleteItem = function (index) {
//       $scope.items.splice(index, 1);
//     };
//   },
// ]);
