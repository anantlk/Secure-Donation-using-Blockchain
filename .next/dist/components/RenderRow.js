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
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RenderRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderRow.__proto__ || (0, _getPrototypeOf2.default)(RenderRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      approvalLoading: false,
      finalizeLoading: false,
      errMessage: ""
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RenderRow, [{
    key: "onApprove",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var organization, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                organization = (0, _organization2.default)(this.props.address);
                _context.prev = 1;
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;

                this.setState({
                  approvalLoading: true,
                  errMessage: ""
                });
                _context.next = 8;
                return organization.methods.approveRequest(this.props.id).send({
                  from: accounts[0]
                });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

                this.setState({
                  errMessage: _context.t0.message
                });

              case 13:
                this.setState({
                  approvalLoading: false
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function onApprove() {
        return _ref2.apply(this, arguments);
      }

      return onApprove;
    }()
  }, {
    key: "onFinalize",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var organization, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                organization = (0, _organization2.default)(this.props.address);
                _context2.prev = 1;

                this.setState({
                  finalizeLoading: true,
                  errMessage: false
                });
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return organization.methods.finalizeRequest(this.props.id).send({
                  from: accounts[0]
                });

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                this.setState({
                  errMessage: _context2.t0.message
                });

              case 13:
                this.setState({
                  finalizeLoading: false
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 10]]);
      }));

      function onFinalize() {
        return _ref3.apply(this, arguments);
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
          lineNumber: 59
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, this.props.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, this.props.request.recipent), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _web2.default.utils.fromWei(this.props.request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.props.request.approvalCount, "/", this.props.approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.approvalLoading,
        onClick: this.onApprove.bind(this),
        color: "green",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.finalizeLoading,
        onClick: this.onFinalize.bind(this),
        color: "teal",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Finalize")));
    }
  }]);

  return RenderRow;
}(_react2.default.Component);

exports.default = RenderRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVuZGVyUm93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiT3JnYW5pemF0aW9uIiwiUm91dGVyIiwiUmVuZGVyUm93Iiwic3RhdGUiLCJhcHByb3ZhbExvYWRpbmciLCJmaW5hbGl6ZUxvYWRpbmciLCJlcnJNZXNzYWdlIiwib3JnYW5pemF0aW9uIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZWFkeVRvQmVGaW5hbGl6ZWQiLCJyZXF1ZXN0IiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiUm93IiwiQ2VsbCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGVudCIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwib25BcHByb3ZlIiwiYmluZCIsIm9uRmluYWxpemUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7a04sQUFDSjt1QkFBUSxBQUNXLEFBQ2pCO3VCQUZNLEFBRVcsQUFDakI7a0JBSE0sQSxBQUdNO0FBSE4sQUFDTjs7Ozs7Ozs7Ozs7bUJBS007QSwrQkFBZSw0QkFBYSxLQUFBLEFBQUssTSxBQUFsQixBQUF3Qjs7O3VCQUVwQixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O21CQUExQjtBLG9DQUNOOztxQkFBQSxBQUFLO21DQUFTLEFBQ0ssQUFDakI7OEJBRkYsQUFBYyxBQUVBO0FBRkEsQUFDWjs7b0NBR0ksQUFBYSxRQUFiLEFBQXFCLGVBQWUsS0FBQSxBQUFLLE1BQXpDLEFBQStDLElBQS9DLEFBQW1EO3dCQUNqRCxTLEFBREYsQUFBd0QsQUFDdEQsQUFBUztBQUQ2QyxBQUM1RCxpQkFESTs7Ozs7Ozs7Z0RBSU47O3FCQUFBLEFBQUs7OEJBQ1MsWUFEZCxBQUFjLEFBQ0k7QUFESixBQUNaOzttQkFHSjtxQkFBQSxBQUFLO21DQUFMLEFBQWMsQUFDSztBQURMLEFBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFLSTtBLCtCQUFlLDRCQUFhLEtBQUEsQUFBSyxNQUFsQixBLEFBQXdCO2lDQUUzQzs7cUJBQUEsQUFBSzttQ0FBUyxBQUNLLEFBQ2pCOzhCQUZGLEFBQWMsQUFFQTtBQUZBLEFBQ1o7O3VCQUdxQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBOztvQ0FDQSxBQUFhLFFBQWIsQUFBcUIsZ0JBQWdCLEtBQUEsQUFBSyxNQUExQyxBQUFnRCxJQUFoRCxBQUFvRDt3QkFDbEQsU0FERixBQUF5RCxBQUN2RCxBQUFTLEE7QUFEOEMsQUFDN0QsaUJBREk7Ozs7Ozs7O2tEQUlOOztxQkFBQSxBQUFLOzhCQUNTLGFBRGQsQUFBYyxBQUNJO0FBREosQUFDWjs7bUJBR0o7cUJBQUEsQUFBSzttQ0FBTCxBQUFjLEFBQ0s7QUFETCxBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR0ssQUFDUDtVQUFNLHFCQUNKLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFGekMsQUFDUCxBQUNpRTtVQUYxRCxBQUdDLE1BSEQsQUFHZSx1QkFIZixBQUdDO1VBSEQsQUFHTSxPQUhOLEFBR2UsdUJBSGYsQUFHTSxBQUNiOzs2QkFDRyxjQUFEO2tCQUNZLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFEdkIsQUFDK0IsQUFDN0I7a0JBQVUsc0JBQXNCLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUY5QyxBQUVzRDs7b0JBRnREO3NCQUFBLEFBSUU7QUFKRjtBQUNFLE9BREYsa0JBSUcsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BSmQsQUFJRSxBQUFrQixBQUNsQixxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBTHBCLEFBS0UsQUFBMEIsQUFDMUIsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxRQU5wQixBQU1FLEFBQTBCLEFBQzFCLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUE5QixBQUFzQyxPQVAvQyxBQU9FLEFBQU8sQUFBNkMsQUFDcEQsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQURkLEFBQ3NCLGVBQWdCLFVBQUEsQUFBSyxNQVQ3QyxBQVFFLEFBQ2lELEFBRWpELGlDQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDN0IsQUFBQztpQkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDcEI7aUJBQVMsS0FBQSxBQUFLLFVBQUwsQUFBZSxLQUYxQixBQUVXLEFBQW9CLEFBQzdCO2VBSEYsQUFHUSxBQUNOO2VBSkY7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxPQURGLEVBYk4sQUFXRSxBQUVJLEFBVUosNkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHVCQUM3QixBQUFDO2lCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNwQjtpQkFBUyxLQUFBLEFBQUssV0FBTCxBQUFnQixLQUYzQixBQUVXLEFBQXFCLEFBQzlCO2VBSEYsQUFHUSxBQUNOO2VBSkY7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxPQURGLEVBMUJSLEFBQ0UsQUF1QkUsQUFFSSxBQVlUOzs7OztFQXpGcUIsZ0JBQU0sQSxBQTRGOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVuZGVyUm93LmpzIiwic291cmNlUm9vdCI6Ii9tZWRpYS9hbmFudC9BbmFudC9Qcm9qZWN0cy9TZWN1cmUtRG9uYXRpb24ifQ==