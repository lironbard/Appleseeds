(function () {
  var OrdersController = function ($scope, $log, $routeParams, customerFactory) {
    var customerId = $routeParams.customerId;
    $scope.customer = null;

    function init() {
      customersFactory
        .getCustomers(customerId)
        .success(function (customer) {
          $scope.customer = customer;
        })
        .error(function (data, status, headers, config) {
          $log.log("");
        });
    }

    init();
  };
  OrdersController.$inject = ["$scope", "$log", "$routeParams", "customerFactory"];

  angular.module("OrdersApp").controller("OrdersController", CustomersController);
})();
