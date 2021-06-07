//Option 3
(function () {
  var CustomersController = function ($scope, customersFactory) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.customers = [];

    function init() {
      $scope.customers = customersFactory.getCustomers();
    }

    $scope.doSort = function (propName) {
      $scope.sortBy = "propName";
      $scope.reverse = !scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "customersFactory"];

  angular.module("customersApp").controller("CustomerController", CustomersController);
})();

//Option 2

// (function () {
//   angular.module("customersApp").controller("CustomersController", function ($scope) {
//     $scope.sortBy = "name";
//     $scope.reverse = false;

//     $scope.customers = [
//       { joined: "2000-12-02", name: "John", city: "New York", orderTotal: 9.9956 },
//       { joined: "2000-11-01", name: "Dave", city: "TLV", orderTotal: 20.22 },
//       { joined: "2000-10-01", name: "Tina", city: "Bangkok", orderTotal: 300.111 },
//     ];
//     $scope.doSort = function (propName) {
//       $scope.sortBy = "propName";
//       $scope.reverse = !scope.reverse;
//     };
//   });
// })();

//Option 1

// app.controller("CustomersController", function ($scope) {
//   $scope.sortBy = "name";
//   $scope.reverse = false;

//   $scope.customers = [
//     { joined: "2000-12-02", name: "John", city: "New York", orderTotal: 9.9956 },
//     { joined: "2000-11-01", name: "Dave", city: "TLV", orderTotal: 20.22 },
//     { joined: "2000-10-01", name: "Tina", city: "Bangkok", orderTotal: 300.111 },
//   ];
//   $scope.doSort = function (propName) {
//     $scope.sortBy = "propName";
//     $scope.reverse = !scope.reverse;
//   };
// });
