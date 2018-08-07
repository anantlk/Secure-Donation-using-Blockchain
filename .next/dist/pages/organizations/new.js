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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/new.js?entry";


var NewOrganization = function (_React$Component) {
  (0, _inherits3.default)(NewOrganization, _React$Component);

  function NewOrganization() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewOrganization);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewOrganization.__proto__ || (0, _getPrototypeOf2.default)(NewOrganization)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minContribution: "",
      errMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // event.preventDefault();
                console.log(_this.state.minContribution);
                _context.prev = 1;

                if (!_this.state.loading) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;

                _this.setState({
                  loading: true,
                  errMessage: ""
                });
                console.log(accounts);
                _context.next = 11;
                return _factory2.default.methods.createCampaigns(_this.state.minContribution).send({ from: accounts[0] });

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);

                _this.setState({
                  errMessage: _context.t0.message
                });

              case 16:
                _this.setState({ loading: false });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewOrganization, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "New Organization"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Minimum Contribution:")), _react2.default.createElement(_semanticUiReact.Input, {
        label: "wei",
        labelPosition: "right",
        value: this.state.minContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Error!"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.state.errMessage)), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Create")));
    }
  }]);

  return NewOrganization;
}(_react2.default.Component);

exports.default = NewOrganization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiTmV3T3JnYW5pemF0aW9uIiwic3RhdGUiLCJtaW5Db250cmlidXRpb24iLCJlcnJNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWducyIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs7Ozs7OE5BQ0osQTt1QkFBUSxBQUNXLEFBQ2pCO2tCQUZNLEFBRU0sQUFDWjtlQUhNLEFBR0csQTtBQUhILEFBQ04sYSxBQUtGOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO0FBQ0E7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUZSLEFBRVQsQUFBdUI7Z0NBRmQ7O3FCQUlILE1BQUEsQUFBSyxNQUpGLEFBSVEsU0FKUjtrQ0FBQTtBQUFBO0FBQUE7O3VDQUFBOzttQkFBQTtnQ0FBQTt1QkFLZ0IsY0FBQSxBQUFLLElBTHJCLEFBS2dCLEFBQVM7O21CQUExQjtBQUxDLG9DQU1QOztzQkFBQSxBQUFLOzJCQUFTLEFBQ0gsQUFDVDs4QkFGRixBQUFjLEFBRUEsQUFFZDtBQUpjLEFBQ1o7d0JBR0YsQUFBUSxJQVZELEFBVVAsQUFBWTtnQ0FWTDt1QkFXRCxrQkFBQSxBQUFRLFFBQVIsQUFDSCxnQkFBZ0IsTUFBQSxBQUFLLE1BRGxCLEFBQ3dCLGlCQUR4QixBQUVILEtBQUssRUFBRSxNQUFNLFNBYlQsQUFXRCxBQUVFLEFBQVEsQUFBUzs7bUJBYmxCO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWVQOztzQkFBQSxBQUFLOzhCQUNTLFlBaEJQLEFBZVAsQUFBYyxBQUNJO0FBREosQUFDWjs7bUJBR0o7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FuQlAsQUFtQlQsQUFBYyxBQUFXOzttQkFuQmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBcUJGO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLDJDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsaUJBQWlCLE1BQUEsQUFBTSxPQUQvQixBQUNSLEFBQWMsQUFBZ0M7QUFMbEQ7O29CQUFBO3NCQUxKLEFBQ0UsQUFJRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQseUJBQUEsQUFBUzs7b0JBQVQ7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxNQWpCYixBQWVFLEFBRUUsQUFBZSxBQUVqQiw4QkFBQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQXRCTixBQUNFLEFBRUUsQUFtQkUsQUFNUDs7Ozs7RUF6RDJCLGdCQUFNLEEsQUE0RHBDOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=