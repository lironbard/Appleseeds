(function () {
  var myListFactory = function () {
    var items = ["Box", "Ball", "Crowbar", "Pen"];
    //var items = $scope.items;

    var factory = {};
    factory.getItems = function () {
      return items;
    };
    return factory;
  };
  angular.module("myList").factory("myListFactory", myListFactory);
})();
