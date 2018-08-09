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

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

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
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(this.props.address);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                _context.next = 6;
                return campaign.methods.approveRequest(this.props.id).send({
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
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                campaign = (0, _campaign2.default)(this.props.address);
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                _context2.next = 6;
                return campaign.methods.finalizeRequest(this.props.id).send({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVuZGVyUm93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSb3V0ZXIiLCJSZW5kZXJSb3ciLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwiZmluYWxpemVSZXF1ZXN0IiwicmVhZHlUb0JlRmluYWxpemVkIiwicmVxdWVzdCIsImFwcHJvdmFsQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIlJvdyIsIkNlbGwiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBlbnQiLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsIm9uQXBwcm92ZSIsImJpbmQiLCJvbkZpbmFsaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRUk7QSwyQkFBVyx3QkFBUyxLQUFBLEFBQUssTSxBQUFkLEFBQW9COzt1QkFDZCxjQUFBLEFBQUssSUFBTCxBLEFBQVM7O21CQUExQjtBOztnQ0FDQSxBQUFTLFFBQVQsQUFBaUIsZUFBZSxLQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7d0JBQzdDLFNBREYsQUFBb0QsQUFDbEQsQUFBUyxBO0FBRHlDLEFBQ3hELGlCQURJOzttQkFHTjsrQkFBQSxBQUFPLGlDQUErQixLQUFBLEFBQUssTUFBM0MsQUFBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFJM0M7QSwyQkFBVyx3QkFBUyxLQUFBLEFBQUssTUFBTSxBLEFBQXBCOzt1QkFDTSxjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBOztnQ0FDQSxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLEtBQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDt3QkFDOUMsUyxBQURGLEFBQXFELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsaUJBREk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFJQyxBQUNQO1VBQU0scUJBQ0osS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLGdCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLGlCQUZ6QyxBQUNQLEFBQ2lFO1VBRjFELEFBR0MsTUFIRCxBQUdlLHVCQUhmLEFBR0M7VUFIRCxBQUdNLE9BSE4sQUFHZSx1QkFIZixBQUdNLEFBQ2I7OzZCQUNHLGNBQUQ7a0JBQ1ksS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUR2QixBQUMrQixBQUM3QjtrQkFBVSxzQkFBc0IsQ0FBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBRjlDLEFBRXNEOztvQkFGdEQ7c0JBQUEsQUFJRTtBQUpGO0FBQ0UsT0FERixrQkFJRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFKZCxBQUlFLEFBQWtCLEFBQ2xCLHFCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsUUFMcEIsQUFLRSxBQUEwQixBQUMxQiw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBTnBCLEFBTUUsQUFBMEIsQUFDMUIsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQTlCLEFBQXNDLE9BUC9DLEFBT0UsQUFBTyxBQUE2QyxBQUNwRCwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFBTCxBQUFXLFFBRGQsQUFDc0IsZUFBZ0IsVUFBQSxBQUFLLE1BVDdDLEFBUUUsQUFDaUQsQUFFakQsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHVCQUM3QixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLFVBQUwsQUFBZSxLQUFoQyxBQUFpQixBQUFvQixPQUFPLE9BQTVDLEFBQWtELFNBQVEsT0FBMUQ7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBYk4sQUFXRSxBQUVJLEFBS0osNkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHVCQUM3QixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBakMsQUFBaUIsQUFBcUIsT0FBTyxPQUE3QyxBQUFtRCxRQUFPLE9BQTFEO29CQUFBO3NCQUFBO0FBQUE7T0FBQSxFQXJCUixBQUNFLEFBa0JFLEFBRUksQUFPVDs7Ozs7RUFqRHFCLGdCQUFNLEEsQUFvRDlCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlbmRlclJvdy5qcyIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=