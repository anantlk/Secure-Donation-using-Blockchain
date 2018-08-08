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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

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

      //console.log(this.props.requests);
      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RenderRow2.default, {
          id: index,
          request: request,
          key: index,
          approversCount: _this2.props.approverCount,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
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
          lineNumber: 48
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Add Request"))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Approvals"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approverCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                _context.next = 3;
                return (0, _campaign2.default)(address);

              case 3:
                campaign = _context.sent;
                _context.next = 6;
                return campaign.methods.getRequestsCount().call();

              case 6:
                requestCount = _context.sent;
                _context.next = 9;
                return campaign.methods.approversCount().call();

              case 9:
                approverCount = _context.sent;
                requests = void 0;

                console.log(requestCount);

                if (!(requestCount > 0)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 15;
                return _promise2.default.all(Array(requestCount).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 15:
                requests = _context.sent;
                _context.next = 19;
                break;

              case 18:
                requests = [];

              case 19:
                return _context.abrupt("return", { address: address, requests: requests, approverCount: approverCount });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvcmVxdWVzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiVGFibGUiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIlJlbmRlclJvdyIsIlZpZXdSZXF1ZXN0cyIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhcHByb3ZlckNvdW50IiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJhbGwiLCJBcnJheSIsImZpbGwiLCJlbGVtZW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWU7Ozs7Ozs7OztJQUVoQixBOzs7Ozs7Ozs7OztpQ0FzQlM7bUJBQ1g7O0FBQ0E7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNqRDsrQkFDRSxBQUFDO2NBQUQsQUFDTSxBQUNKO21CQUZGLEFBRVcsQUFDVDtlQUhGLEFBR08sQUFDTDswQkFBZ0IsT0FBQSxBQUFLLE1BSnZCLEFBSTZCLEFBQzNCO21CQUFTLE9BQUEsQUFBSyxNQUxoQixBQUtzQjs7c0JBTHRCO3dCQURGLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsU0FERjtBQUZKLEFBQU8sQUFXUixPQVhROzs7OzZCQWFBO1VBQUEsQUFDQyxTQURELEFBQ21DLHVCQURuQyxBQUNDO1VBREQsQUFDUyxNQURULEFBQ21DLHVCQURuQyxBQUNTO1VBRFQsQUFDYyxhQURkLEFBQ21DLHVCQURuQyxBQUNjO1VBRGQsQUFDMEIsT0FEMUIsQUFDbUMsdUJBRG5DLEFBQzBCLEFBQ2pDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsOEJBQUssMkJBQXlCLEtBQUEsQUFBSyxNQUE5QixBQUFvQyxVQUExQztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLGtDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw2QkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBcEJOLEFBQ0UsQUFPRSxBQVlFLEFBQU8sQUFBSyxBQUluQjs7Ozs7MkdBOUQ0QixBOzs7OzttQkFDbkI7QSwwQkFBWSxNLEFBQU0sTUFBbEIsQTs7dUJBQ2Usd0JBQUEsQUFBUyxBOzttQkFBMUI7QTs7dUJBQ3FCLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxBOzttQkFBekQ7QTs7dUJBQ3NCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCQUFqQixBQUFrQyxBOzttQkFBeEQ7QSx5Q0FDRjtBLGdDQUNKOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7c0JBQ1IsZUFBZSxBOzs7Ozs7eUNBQ0EsQUFBUSxVQUN2QixBQUFNLGNBQU4sQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUxZLEFBQ2YsQSxpQkFBQSxDQURlOzttQkFBakI7QTs7OzttQkFRQTsyQkFBQSxBQUFXOzs7aURBRU4sRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixlQUFyQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkJnQixnQkFBTSxBLEFBa0VqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=