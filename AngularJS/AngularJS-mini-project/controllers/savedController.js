(function () {
  var savedController = function ($scope, myListFactory) {
    $scope.items = null;
    function init() {
      $scope.items = myListFactory.getItems();
    }
    init();
  };
  angular.module("myList").controller("savedController", savedController);
})();

// app.controller("savedController", [
//   "$scope", // Instead of using $inject
//   function ($scope) {
//     console.log(angular.module("myList").controller("myListController"));
//     console.log($scope.items);
//     $scope.items = null;

// console.log($scope.items);
// $scope.items = $scope.$parent.items;
// console.log($scope.items);
// console.log("myListController");
// console.log($scope.items);
// $scope.items = $scope.items;
// $scope.items = ["Box", "Ball", "Crowbar", "Pen"];
// $scope.newItem = "";
// $scope.pushItem = function () {
//   if ($scope.newItem !== "") {
//     $scope.items.push($scope.newItem);
//     $scope.newItem = "";
//   }
// };
// $scope.deleteItem = function (index) {
//   $scope.items.splice(index, 1);
// };
//   },
// ]);
