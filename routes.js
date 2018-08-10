const routes = require("next-routes")();

routes
  .add("/organizations/new", "organizations/new")
  .add("/organizations/:address", "/organizations/showOrganization")
  .add('/organizations/:address/requests','/organizations/requests/index')
  .add('/organizations/:address/requests/new','/organizations/requests/create');

module.exports = routes;
