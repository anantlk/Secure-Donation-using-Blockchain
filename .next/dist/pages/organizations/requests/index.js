"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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
    (0, _classCallCheck3.default)(this, ViewRequests);

    return (0, _possibleConstructorReturn3.default)(this, (ViewRequests.__proto__ || (0, _getPrototypeOf2.default)(ViewRequests)).apply(this, arguments));
  }

  (0, _createClass3.default)(ViewRequests, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RenderRow2.default, {
          id: index,
          request: request,
          key: index,
          approversCount: _this2.props.approverCount,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
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
          lineNumber: 69
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Add Request"))), _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: "left", floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "left arrow", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), "Back"))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Approvals"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var _this3 = this;

        var address, accounts, organization, requestCount, num, approverCount, requests, allowedApprovers, dict;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                _context2.next = 6;
                return (0, _organization2.default)(address);

              case 6:
                organization = _context2.sent;
                _context2.next = 9;
                return organization.methods.getRequestsCount().call();

              case 9:
                requestCount = _context2.sent;
                _context2.next = 12;
                return organization.methods.num().call();

              case 12:
                num = _context2.sent;
                _context2.next = 15;
                return organization.methods.approversCount().call();

              case 15:
                approverCount = _context2.sent;
                requests = void 0;
                _context2.next = 19;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return organization.methods.requests(index).call();
                }));

              case 19:
                requests = _context2.sent;
                allowedApprovers = {};

                console.log(num);
                console.log(requests);
                _context2.next = 25;
                return _promise2.default.all(requests.map(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, index) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _promise2.default.all(Array(parseInt(num)).fill().map(function (ele, index) {
                              console.log(request.id);
                              return organization.methods.reqApprovers(parseInt(request.id), index).call();
                            }));

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, _this3);
                  }));

                  return function (_x2, _x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 25:
                dict = _context2.sent;

                console.log(dict);

                return _context2.abrupt("return", { address: address, requests: requests, approverCount: approverCount });

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ViewRequests;
}(_react2.default.Component);

exports.default = ViewRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvcmVxdWVzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiVGFibGUiLCJEaW1tZXIiLCJMb2FkZXIiLCJJbWFnZSIsIlNlZ21lbnQiLCJJY29uIiwid2ViMyIsIkxheW91dCIsIk9yZ2FuaXphdGlvbiIsIlJlbmRlclJvdyIsIlZpZXdSZXF1ZXN0cyIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhcHByb3ZlckNvdW50IiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm9yZ2FuaXphdGlvbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsIm51bSIsImFwcHJvdmVyc0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiYWxsb3dlZEFwcHJvdmVycyIsImNvbnNvbGUiLCJsb2ciLCJlbGUiLCJpZCIsInJlcUFwcHJvdmVycyIsImRpY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFlOzs7Ozs7Ozs7SUFFaEIsQTs7Ozs7Ozs7Ozs7aUNBbUNTO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUNFLEFBQUM7Y0FBRCxBQUNNLEFB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LEFBQWEsUUFBYixBQUFxQixTQUFyQixBQUE4QixPQUFyQyxBQUFPLEFBQXFDLEFBQzdDO0EsQUFMWSxBQUNmLGlCQUFBLENBRGU7O21CQUFqQjtBLHFDQVFJO0EsbUMsQUFBbUIsQUFDdkI7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3lDQUNPLEFBQVEsYUFBSSxBQUFTLGdCQUFUO3VHQUFhLGlCQUFBLEFBQU8sU0FBUCxBQUFlLE9BQWY7a0ZBQUE7Z0NBQUE7eURBQUE7K0JBQUE7NENBQUE7cURBQzdCLEFBQVEsVUFDYixTQUFOLEFBQU0sQUFBUyxNQUFmLEFBQXFCLE9BQXJCLEFBQTRCLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBSyxPQUFVLEFBQzdDO3NDQUFBLEFBQVEsSUFBSSxRQUFaLEFBQW9CLEFBQ3BCO3FDQUFPLGFBQUEsQUFBYSxRQUFiLEFBQXFCLGFBQWEsU0FBUyxRQUEzQyxBQUFrQyxBQUFpQixLQUFuRCxBQUF1RCxPQUE5RCxBQUFPLEFBQThELEFBQ3RFO0FBTHVDLEFBQzdCLEFBQ1gsNkJBQUEsQ0FEVzs7K0JBRDZCO3NFQUFBOzsrQkFBQTsrQkFBQTs0Q0FBQTs7QUFBQTtnQ0FBQTtBQUFiOzs2Q0FBQTs2Q0FBQTtBQUFBO0FBQVosQSxtQkFBWSxDQUFaOzttQkFBYjtBLGlDQVNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7a0RBRUwsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixlQUFyQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENnQixnQkFBTSxBLEFBMkZqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=