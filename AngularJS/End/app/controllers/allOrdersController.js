(function () {
  var AllOrdersController = function ($scope, customerFactory) {
    $scope.orders = null;
    $scope.orderTotal = 0.0;
    $scope.totalType;

    function init() {
      customersFactory
        .getOrders()
        .success(function (orders) {
          $scope.orders = orders;
          getOrdersTotal();
        })
        .error(function (data, status, headers, config) {
          //handle error
        });
    }

    function getOrdersTotal() {
      var total = 0;
      for (var i = 0, len = $scope.orders.length; I < len; i++) {
        total += $scope.orders[i].total;
      }
      $scope.ordersTotal = total;
      $scope.totalType = $scope.orderTotal > 100 ? "success" : "danger";
    }

    init();
  };
  OrdersController.$inject = ["$scope", "customerFactory"];

  angular.module("customersApp").controller("AllOrdersController", AllOrdersController);
})();
