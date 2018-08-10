"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Organization = require("./build/Organization.json");

var _Organization2 = _interopRequireDefault(_Organization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Organization2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL29yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiT3JnYW5pemF0aW9uIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBeUIsQUFBekIsQUFFQTs7Ozs7O2tCQUFlLG1CQUFXLEFBQ3hCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLHVCQUFhLEFBQXhCLEFBQXRCLFlBQTBELEFBQTFELEFBQVAsQUFDRDtBQUZEIiwiZmlsZSI6Im9yZ2FuaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=