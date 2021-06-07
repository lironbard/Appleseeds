(function () {
  var customerFactory = function ($http) {
    var factory = {};
    factory.getCustomers = function () {
      return $http.get("/customers");
    };

    factory.getCustomers = function (customerId) {
      return $http.get("/customers/" + customerId);
    };

    return factory;
  };

  customerFactory.$inject = ["$http"];

  angular.module("customersApp").factory("customersFactory", customerFactory);
})();
