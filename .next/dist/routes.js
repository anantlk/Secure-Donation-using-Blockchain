"use strict";

var routes = require("next-routes")();

routes.add("/organizations/new", "organizations/new").add("/organizations/:address", "/organizations/showOrganization").add('/organizations/:address/requests', '/organizations/requests/index').add('/organizations/:address/requests/new', '/organizations/requests/create');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLHNCQUM2QixBQUQ3QixxQkFFRyxBQUZILElBRU8sQUFGUCwyQkFFa0MsQUFGbEMsbUNBR0csQUFISCxJQUdPLEFBSFAsb0NBRzBDLEFBSDFDLGlDQUlHLEFBSkgsSUFJTyxBQUpQLHdDQUk4QyxBQUo5Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9tZWRpYS9hbmFudC9BbmFudC9Qcm9qZWN0cy9TZWN1cmUtRG9uYXRpb24ifQ==