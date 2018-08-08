const routes = require("next-routes")();

routes
  .add("/organizations/new", "organizations/new")
  .add("/organizations/:address", "/organizations/showOrganization");
module.exports = routes;
