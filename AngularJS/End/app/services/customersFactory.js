(function () {
  var customerFactory = function () {
    var factory = {};
    factory.getCustomers = function () {
      return customers;
    };

    factory.getCustomers = function (customerId) {
      for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === parseInt(customerId)) {
          return customers[i];
        }
      }
      return {};
    };

    return factory;
  };

  angular.module("customersApp").factory("customersFactory", customerFactory);
})();
