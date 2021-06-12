(function () {
  var myListController = function ($scope, myListFactory) {
    console.log(myListFactory);
    function init() {
      $scope.items = myListFactory.getItems();
    }

    init();
    $scope.newItem = "";

    $scope.pushItem = function () {
      if ($scope.newItem !== "") {
        $scope.items.push($scope.newItem);
        $scope.newItem = "";
        //console.log($scope.items);
      }
    };

    $scope.deleteItem = function (index) {
      $scope.items.splice(index, 1);
      //console.log($scope.items);
    };
  };

  angular.module("myList").controller("myListController", myListController);
})();

// var myListController =  function ($scope,myListFactory) {
//     function ($scope, myListFactory) {
//       console.log(myListFactory);
//       function init(myListFactory) {
//         $scope.items = myListFactory.getItems();
//       }

//       init();
//       //$scope.items = ["Box", "Ball", "Crowbar", "Pen"];
//       $scope.newItem = "";

//       $scope.pushItem = function () {
//         if ($scope.newItem !== "") {
//           $scope.items.push($scope.newItem);
//           $scope.newItem = "";
//           //console.log($scope.items);
//         }
//       };

//       $scope.deleteItem = function (index) {
//         $scope.items.splice(index, 1);
//         //console.log($scope.items);
//       };
//     },
// });
