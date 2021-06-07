//Option 3
(function () {
  var CustomersController = (function ($scope) {
    angular.module("customersApp").controller("CustomersController", function ($scope) {
      $scope.sortBy = "name";
      $scope.reverse = false;

      $scope.customers = [
        { id: 1, joined: "2000-12-02", name: "John", city: "New York", orderTotal: 9.9956, orders: [{ id: 1, product: "shoe", total: 9.9956 }] },
        {
          id: 2,
          joined: "2000-11-01",
          name: "Dave",
          city: "TLV",
          orderTotal: 20.22,
          orders: [
            { id: 2, product: "ball", total: 9.995 },
            { id: 3, product: "hat", total: 9.995 },
          ],
        },
        { id: 3, joined: "2000-10-01", name: "Tina", city: "Bangkok", orderTotal: 300.111, orders: [{ id: 4, product: "iPhone", total: 400 }] },
      ];
      $scope.doSort = function (propName) {
        $scope.sortBy = "propName";
        $scope.reverse = !scope.reverse;
      };

      CustomersController.$inject = ["$scope"];
    });
  })();

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
