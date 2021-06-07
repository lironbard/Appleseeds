var express = require("express"),
  app = express();

// Express 3
// app.configure(function () {
//   app.use(express.static(__dirname, "/"));
// });

//Express 4
app.use(express.static(__dirname + "/"));

app.get("/customers/:id", function (req, res) {
  var customerId = parseInt(req.params.id);
  var data = {};
  for (var i = 0, len = customers.length; i < len; i++) {
    if (customers[i].id === customerId) {
      data = customers[i];
      break;
    }
  }
  res.json(data);
});

app.get("/customers", function (req, res) {
  //res.json(customers);
  res.json(500, { error: "An error has occurred!" });
});

app.listen(8080);

console.log("Express listening on port 8080");

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
