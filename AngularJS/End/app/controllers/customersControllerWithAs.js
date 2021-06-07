function CustomersController() {
  this.sortBy = "name";
  this.reverse = false;

  this.customers = [
    { joined: "2000-12-02", name: "John", city: "New York", orderTotal: 9.9956 },
    { joined: "2000-11-01", name: "Dave", city: "TLV", orderTotal: 20.22 },
    { joined: "2000-10-01", name: "Tina", city: "Bangkok", orderTotal: 300.111 },
  ];
  this.doSort = function (propName) {
    this.sortBy = "propName";
    this.reverse = !scope.reverse;
  };
}
