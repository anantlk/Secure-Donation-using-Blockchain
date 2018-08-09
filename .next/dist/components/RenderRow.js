"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _organization = require("../ethereum/organization");

var _organization2 = _interopRequireDefault(_organization);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/components/RenderRow.js";


var RenderRow = function (_React$Component) {
  (0, _inherits3.default)(RenderRow, _React$Component);

  function RenderRow() {
    (0, _classCallCheck3.default)(this, RenderRow);

    return (0, _possibleConstructorReturn3.default)(this, (RenderRow.__proto__ || (0, _getPrototypeOf2.default)(RenderRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(RenderRow, [{
    key: "onApprove",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var organization, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                organization = (0, _organization2.default)(this.props.address);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                _context.next = 6;
                return organization.methods.approveRequest(this.props.id).send({
                  from: accounts[0]
                });

              case 6:
                _routes.Router.replaceRoute("/organizations/" + this.props.address + "/requests");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onApprove() {
        return _ref.apply(this, arguments);
      }

      return onApprove;
    }()
  }, {
    key: "onFinalize",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var organization, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                organization = organization(this.props.address);
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                _context2.next = 6;
                return organization.methods.finalizeRequest(this.props.id).send({
                  from: accounts[0]
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onFinalize() {
        return _ref2.apply(this, arguments);
      }

      return onFinalize;
    }()
  }, {
    key: "render",
    value: function render() {
      var readyToBeFinalized = this.props.request.approvalCount > this.props.approversCount / 2;
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(Row, {
        disabled: this.props.request.complete,
        positive: readyToBeFinalized && !this.props.request.complete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, this.props.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.request.recipent), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _web2.default.utils.fromWei(this.props.request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.props.request.approvalCount, "/", this.props.approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onApprove.bind(this), color: "green", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onFinalize.bind(this), color: "teal", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Finalize")));
    }
  }]);

  return RenderRow;
}(_react2.default.Component);

exports.default = RenderRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVuZGVyUm93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiT3JnYW5pemF0aW9uIiwiUm91dGVyIiwiUmVuZGVyUm93Iiwib3JnYW5pemF0aW9uIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZWFkeVRvQmVGaW5hbGl6ZWQiLCJyZXF1ZXN0IiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiUm93IiwiQ2VsbCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGVudCIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwib25BcHByb3ZlIiwiYmluZCIsIm9uRmluYWxpemUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRUk7QSwrQkFBZSw0QkFBYSxLQUFBLEFBQUssTSxBQUFsQixBQUF3Qjs7dUJBQ3RCLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0E7O29DQUNBLEFBQWEsUUFBYixBQUFxQixlQUFlLEtBQUEsQUFBSyxNQUF6QyxBQUErQyxJQUEvQyxBQUFtRDt3QkFDakQsU0FERixBQUF3RCxBQUN0RCxBQUFTLEE7QUFENkMsQUFDNUQsaUJBREk7O21CQUdOOytCQUFBLEFBQU8saUNBQStCLEtBQUEsQUFBSyxNQUEzQyxBQUFpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUkzQztBLCtCQUFlLGFBQWEsS0FBQSxBQUFLLE1BQU0sQSxBQUF4Qjs7dUJBQ0UsY0FBQSxBQUFLLEksQUFBTCxBQUFTOzttQkFBMUI7QTs7b0NBQ0EsQUFBYSxRQUFiLEFBQXFCLGdCQUFnQixLQUFBLEFBQUssTUFBMUMsQUFBZ0QsSUFBaEQsQUFBb0Q7d0JBQ2xELFMsQUFERixBQUF5RCxBQUN2RCxBQUFTO0FBRDhDLEFBQzdELGlCQURJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSUMsQUFDUDtVQUFNLHFCQUNKLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFGekMsQUFDUCxBQUNpRTtVQUYxRCxBQUdDLE1BSEQsQUFHZSx1QkFIZixBQUdDO1VBSEQsQUFHTSxPQUhOLEFBR2UsdUJBSGYsQUFHTSxBQUNiOzs2QkFDRyxjQUFEO2tCQUNZLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFEdkIsQUFDK0IsQUFDN0I7a0JBQVUsc0JBQXNCLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUY5QyxBQUVzRDs7b0JBRnREO3NCQUFBLEFBSUU7QUFKRjtBQUNFLE9BREYsa0JBSUcsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BSmQsQUFJRSxBQUFrQixBQUNsQixxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBTHBCLEFBS0UsQUFBMEIsQUFDMUIsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxRQU5wQixBQU1FLEFBQTBCLEFBQzFCLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUE5QixBQUFzQyxPQVAvQyxBQU9FLEFBQU8sQUFBNkMsQUFDcEQsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQURkLEFBQ3NCLGVBQWdCLFVBQUEsQUFBSyxNQVQ3QyxBQVFFLEFBQ2lELEFBRWpELGlDQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDN0IsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FBaEMsQUFBaUIsQUFBb0IsT0FBTyxPQUE1QyxBQUFrRCxTQUFRLE9BQTFEO29CQUFBO3NCQUFBO0FBQUE7T0FBQSxFQWJOLEFBV0UsQUFFSSxBQUtKLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDN0IsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxXQUFMLEFBQWdCLEtBQWpDLEFBQWlCLEFBQXFCLE9BQU8sT0FBN0MsQUFBbUQsUUFBTyxPQUExRDtvQkFBQTtzQkFBQTtBQUFBO09BQUEsRUFyQlIsQUFDRSxBQWtCRSxBQUVJLEFBT1Q7Ozs7O0VBakRxQixnQkFBTSxBLEFBb0Q5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZW5kZXJSb3cuanMiLCJzb3VyY2VSb290IjoiL21lZGlhL2FuYW50L0FuYW50L1Byb2plY3RzL1NlY3VyZS1Eb25hdGlvbiJ9