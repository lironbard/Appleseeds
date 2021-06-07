(function () {
  var OrdersController = function ($scope, $routeParams) {
    var customerId = $routeParams.customerId;
    $scope.orders = null;

    function init() {
      for (var i = 0, len = $scope.customers.length; i < len; i++) {
        if ($scope.customers[i].id === parseInt(customerId)) {
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }

    init();
  };
  OrdersController.$inject = ["$scope", "$routeParams"];

  angular.module("OrdersApp").controller("OrdersController", CustomersController);
})();
