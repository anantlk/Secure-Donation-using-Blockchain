"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _routes = require("../../../routes");

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _organization = require("../../../ethereum/organization");

var _organization2 = _interopRequireDefault(_organization);

var _RenderRow = require("../../../components/RenderRow");

var _RenderRow2 = _interopRequireDefault(_RenderRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/requests/index.js?entry";


var ViewRequests = function (_React$Component) {
  (0, _inherits3.default)(ViewRequests, _React$Component);

  function ViewRequests() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ViewRequests);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ViewRequests.__proto__ || (0, _getPrototypeOf2.default)(ViewRequests)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      requests: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ViewRequests, [{
    key: "componentDidMount",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var accounts, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;

                console.log(accounts);
                requests = this.props.requests.filter(function (request, index) {
                  if (request.complete || accounts[0] == _this2.props.manager) return true;
                  return _this2.props.reqApprovers[index].indexOf(accounts[0]) != -1;
                });

                this.setState({
                  requests: requests
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderRows",
    value: function renderRows() {
      var _this3 = this;

      return this.state.requests.map(function (request, index) {
        return _react2.default.createElement(_RenderRow2.default, {
          id: index,
          request: request,
          key: index,
          approversCount: request.numOfAllowedApprovers,
          address: _this3.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Add Request"))), _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: "left", floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "left arrow", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), "Back"))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Approvals"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, this.renderRows())), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Found ", this.state.requests.length, " requests"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var _this4 = this;

        var address, accounts, organization, requestCount, approverCount, manager, requests, reqApprovers;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = props.query.address;
                _context3.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context3.sent;
                _context3.next = 6;
                return (0, _organization2.default)(address);

              case 6:
                organization = _context3.sent;
                _context3.next = 9;
                return organization.methods.getRequestsCount().call();

              case 9:
                requestCount = _context3.sent;
                _context3.next = 12;
                return organization.methods.approversCount().call();

              case 12:
                approverCount = _context3.sent;
                _context3.next = 15;
                return organization.methods.manager().call();

              case 15:
                manager = _context3.sent;
                requests = void 0;
                _context3.next = 19;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return organization.methods.requests(index).call();
                }));

              case 19:
                requests = _context3.sent;
                _context3.next = 22;
                return _promise2.default.all(requests.map(function () {
                  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, index) {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _promise2.default.all(Array(parseInt(request.numOfAllowedApprovers)).fill().map(function (ele, index) {
                              return organization.methods.reqApprovers(parseInt(request.id), index).call();
                            }));

                          case 2:
                            return _context2.abrupt("return", _context2.sent);

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this4);
                  }));

                  return function (_x2, _x3) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 22:
                reqApprovers = _context3.sent;

                console.log(accounts);
                console.log(reqApprovers);
                return _context3.abrupt("return", { address: address, requests: requests, approverCount: approverCount, reqApprovers: reqApprovers, manager: manager, requestCount: requestCount });

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ViewRequests;
}(_react2.default.Component);

exports.default = ViewRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvcmVxdWVzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiVGFibGUiLCJJY29uIiwid2ViMyIsIkxheW91dCIsIk9yZ2FuaXphdGlvbiIsIlJlbmRlclJvdyIsIlZpZXdSZXF1ZXN0cyIsInN0YXRlIiwicmVxdWVzdHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZmlsdGVyIiwicmVxdWVzdCIsImluZGV4IiwiY29tcGxldGUiLCJtYW5hZ2VyIiwicmVxQXBwcm92ZXJzIiwiaW5kZXhPZiIsInNldFN0YXRlIiwibWFwIiwibnVtT2ZBbGxvd2VkQXBwcm92ZXJzIiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsImxlbmd0aCIsInF1ZXJ5Iiwib3JnYW5pemF0aW9uIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJhcHByb3ZlckNvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiZWxlIiwiaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFDRSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBZTs7Ozs7Ozs7O0ksQUFFaEI7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0o7Z0JBQVEsQUFDSSxBO0FBREosQUFDTjs7Ozs7Ozs7Ozs7Ozs7O3VCQXNDdUIsY0FBQSxBQUFLLElBQUwsQSxBQUFTOzttQkFBMUI7QSxvQ0FDTjs7d0JBQUEs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QUFBQSxjQWhDSixBQW9CRSxBQVlFLEFBQU8sQUFBSyxBQUVkLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFXLGVBQUEsQUFBSyxNQUFMLEFBQVcsU0FBdEIsQUFBK0IsUUFuQ25DLEFBQ0UsQUFrQ0UsQUFHTDs7Ozs7NkdBdEc0QixBOzs7Ozs7O21CQUNuQjtBLDBCQUFZLE1BQU0sQSxNLEFBQWxCOzt1QkFDZSxjQUFBLEFBQUssSUFBTCxBQUFTLEE7O21CQUExQjtBOzt1QkFDcUIsNEJBQUEsQSxBQUFhOzttQkFBbEM7QTs7dUJBQ3FCLGFBQUEsQUFBYSxRQUFiLEFBQXFCLG1CQUFyQixBQUF3QyxBOzttQkFBN0Q7QTs7dUJBQ3NCLGFBQUEsQUFBYSxRQUFiLEFBQXFCLGlCQUFyQixBLEFBQXNDOzttQkFBNUQ7QTs7dUJBQ2dCLGFBQUEsQUFBYSxRQUFiLEFBQXFCLFVBQXJCLEFBQStCLEE7O21CQUEvQztBLG9DQUVGO0E7O3lDQUNhLEFBQVEsVUFDakIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxhQUFBLEFBQWEsUUFBYixBQUFxQixTQUFyQixBQUE4QixPQUFyQyxBQUFPLEFBQXFDLEFBQzdDO0FBTFksQUFDZixBLGlCQUFBLENBRGU7O21CQUFqQjtBOzt5Q0FRMkIsQUFBUSxhQUNqQyxBQUFTLGdCQUFUO3VHQUFhLGtCQUFBLEFBQU8sU0FBUCxBQUFnQixPQUFoQjtvRkFBQTtnQ0FBQTsyREFBQTsrQkFBQTs2Q0FBQTtxREFDRSxBQUFRLFVBQ2IsU0FBUyxRQUFmLEFBQU0sQUFBaUIsd0JBQXZCLEFBQ0csT0FESCxBQUVHLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxPQUFVLEFBQ25CO3FDQUFPLGFBQUEsQUFBYSxRQUFiLEFBQ0osYUFBYSxTQUFTLFFBRGxCLEFBQ1MsQUFBaUIsS0FEMUIsQUFDK0IsT0FEdEMsQUFBTyxBQUVKLEFBQ0o7QUFSTSxBQUNFLEFBQ1gsNkJBQUEsQ0FEVzs7K0JBREY7d0VBQUE7OytCQUFBOytCQUFBOzZDQUFBOztBQUFBO2lDQUFBO0FBQWI7OzZDQUFBOzZDQUFBO0FBQUE7QUFEeUIsQSxtQkFDekIsQ0FEeUI7O21CQUFyQjtBLHlDQWFOOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsSUFBUixBQUFZO2tEQUNMLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsZUFBckIsZUFBb0MsY0FBcEMsY0FBa0QsU0FBbEQsU0FBMkQsY0FBM0QsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDZ0IsZ0JBQU0sQSxBQTZHakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL2FuYW50L0FuYW50L1Byb2plY3RzL1NlY3VyZS1Eb25hdGlvbiJ9