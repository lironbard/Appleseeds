(function () {
  var OrdersController = function ($scope, $routeParams, customerFactory) {
    var customerId = $routeParams.customerId;
    $scope.customer = null;

    function init() {
      $scope.customer = customerFactory.getCustomer(customerId);
    }

    init();
  };
  OrdersController.$inject = ["$scope", "$routeParams", "customerFactory"];

  angular.module("OrdersApp").controller("OrdersController", CustomersController);
})();
