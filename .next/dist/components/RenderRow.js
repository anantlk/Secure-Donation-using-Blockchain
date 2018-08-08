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
        positive: readyToBeFinalized && this.props.request.complete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.props.request.recipent), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _web2.default.utils.fromWei(this.props.request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.request.approvalCount, "/", this.props.approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onApprove.bind(this), color: "green", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onFinalize.bind(this), color: "teal", basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Finalize")));
    }
  }]);

  return RenderRow;
}(_react2.default.Component);

exports.default = RenderRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVuZGVyUm93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZW5kZXJSb3ciLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmluYWxpemVSZXF1ZXN0IiwicmVhZHlUb0JlRmluYWxpemVkIiwicmVxdWVzdCIsImFwcHJvdmFsQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIlJvdyIsIkNlbGwiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBlbnQiLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsIm9uQXBwcm92ZSIsImJpbmQiLCJvbkZpbmFsaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRUk7QSwyQkFBVyx3QkFBUyxLQUFBLEFBQUssTSxBQUFkLEFBQW9COzt1QkFDZCxjQUFBLEFBQUssSUFBTCxBLEFBQVM7O21CQUExQjtBOztnQ0FDQSxBQUFTLFFBQVQsQUFBaUIsZUFBZSxLQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7d0JBQzdDLFNBREYsQUFBb0QsQUFDbEQsQUFBUyxBO0FBRHlDLEFBQ3hELGlCQURJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBTUE7QSwyQkFBVyx3QkFBUyxLQUFBLEFBQUssTUFBZCxBQUFvQixBOzt1QkFDZCxjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBOztnQ0FDQSxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLEtBQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDt3QkFDOUMsU0FERixBQUFxRCxBQUNuRCxBLEFBQVM7QUFEMEMsQUFDekQsaUJBREk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFJQyxBQUNQO1VBQU0scUJBQ0osS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLGdCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLGlCQUZ6QyxBQUNQLEFBQ2lFO1VBRjFELEFBR0MsTUFIRCxBQUdlLHVCQUhmLEFBR0M7VUFIRCxBQUdNLE9BSE4sQUFHZSx1QkFIZixBQUdNLEFBQ2I7OzZCQUNHLGNBQUQ7a0JBQ1ksS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUR2QixBQUMrQixBQUM3QjtrQkFBVSxzQkFBc0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUY3QyxBQUVxRDs7b0JBRnJEO3NCQUFBLEFBSUU7QUFKRjtBQUNFLE9BREYsa0JBSUcsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BSmQsQUFJRSxBQUFrQixBQUNsQixxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBTHBCLEFBS0UsQUFBMEIsQUFDMUIsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxRQU5wQixBQU1FLEFBQTBCLEFBQzFCLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUE5QixBQUFzQyxPQVAvQyxBQU9FLEFBQU8sQUFBNkMsQUFDcEQsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQURkLEFBQ3NCLGVBQWdCLFVBQUEsQUFBSyxNQVQ3QyxBQVFFLEFBQ2lELEFBRWpELGlDQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDN0IsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FBaEMsQUFBaUIsQUFBb0IsT0FBTyxPQUE1QyxBQUFrRCxTQUFRLE9BQTFEO29CQUFBO3NCQUFBO0FBQUE7T0FBQSxFQWJOLEFBV0UsQUFFSSxBQUtKLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDN0IsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxXQUFMLEFBQWdCLEtBQWpDLEFBQWlCLEFBQXFCLE9BQU8sT0FBN0MsQUFBbUQsUUFBTyxPQUExRDtvQkFBQTtzQkFBQTtBQUFBO09BQUEsRUFyQlIsQUFDRSxBQWtCRSxBQUVJLEFBT1Q7Ozs7O0VBaERxQixnQkFBTSxBLEFBbUQ5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZW5kZXJSb3cuanMiLCJzb3VyY2VSb290IjoiL21lZGlhL2FuYW50L0FuYW50L1Byb2plY3RzL1NlY3VyZS1Eb25hdGlvbiJ9