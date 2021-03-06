(function () {
  var customersService = function () {
    var customers = [
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

    this.getCustomers = function () {
      return customers;
    };

    this.getCustomers = function (customerId) {
      for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === parseInt(customerId)) {
          return customers[i];
        }
      }
      return {};
    };
  };

  angular.module("customersApp").service("customersService", customersService);
})();
