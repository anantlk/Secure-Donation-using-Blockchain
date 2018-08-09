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

var _routes = require("../../routes");

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
                console.log(_routes.Router);
                console.log(_this.state.minContribution);
                _context.prev = 2;

                if (!_this.state.loading) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;

                _this.setState({
                  loading: true,
                  errMessage: ""
                });
                console.log(accounts);
                _context.next = 12;
                return _factory2.default.methods.createOrganizations(_this.state.minContribution).send({ from: accounts[0] });

              case 12:
                console.log("Redirecting");
                _routes.Router.pushRoute("/");
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](2);

                _this.setState({
                  errMessage: _context.t0.message
                });

              case 19:
                _this.setState({ loading: false });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 16]]);
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
          lineNumber: 40
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "New Organization"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
          lineNumber: 47
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Error!"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.state.errMessage)), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Create")));
    }
  }]);

  return NewOrganization;
}(_react2.default.Component);

exports.default = NewOrganization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3T3JnYW5pemF0aW9uIiwic3RhdGUiLCJtaW5Db250cmlidXRpb24iLCJlcnJNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibWV0aG9kcyIsImNyZWF0ZU9yZ2FuaXphdGlvbnMiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7OzhOLEFBQ0o7dUJBQVEsQUFDVyxBQUNqQjtrQkFGTSxBQUVNLEFBQ1o7ZUFBUyxBLEFBSEg7QUFBQSxBQUNOLGFBS0YsQTsyRkFBVyxpQkFBQSxBQUFNLE9BQU47WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDt3QkFBQSxBQUFRLEFBQUksQUFDWjt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BRlIsQUFFVCxBQUF1QjtnQ0FGZDs7cUJBSUgsTUFBQSxBQUFLLE1BSkYsQUFJUSxTQUpSO2tDQUFBO0FBQUE7QUFBQTs7dUNBQUE7O21CQUFBO2dDQUFBO3VCQUtnQixjQUFBLEFBQUssSUFMckIsQUFLZ0IsQUFBUzs7bUJBQTFCO0FBTEMsb0NBTVA7O3NCQUFBLEFBQUs7MkJBQVMsQUFDSCxBQUNUOzhCQUZGLEFBQWMsQUFFQSxBQUVkO0FBSmMsQUFDWjt3QkFHRixBQUFRLElBVkQsQUFVUCxBQUFZO2dDQVZMO3VCQVdELGtCQUFBLEFBQVEsUUFBUixBQUNILG9CQUFvQixNQUFBLEFBQUssTUFEdEIsQUFDNEIsaUJBRDVCLEFBRUgsS0FBSyxFQUFFLE1BQU0sU0FiVCxBQVdELEFBRUUsQUFBUSxBQUFTOzttQkFDekI7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjsrQkFBQSxBQUFPLFVBZkEsQUFlUCxBQUFpQjtnQ0FmVjtBQUFBOzttQkFBQTtnQ0FBQTtnREFpQlA7O3NCQUFBLEFBQUs7OEJBQ1MsWUFsQlAsQUFpQlAsQUFBYyxBQUNJO0FBREosQUFDWjs7bUJBR0o7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FyQlAsQUFxQlQsQUFBYyxBQUFXOzttQkFyQmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBdUJGO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLDJDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsaUJBQWlCLE1BQUEsQUFBTSxPQUQvQixBQUNSLEFBQWMsQUFBZ0M7QUFMbEQ7O29CQUFBO3NCQUxKLEFBQ0UsQUFJRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQseUJBQUEsQUFBUzs7b0JBQVQ7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxNQWpCYixBQWVFLEFBRUUsQUFBZSxBQUVqQiw4QkFBQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQXRCTixBQUNFLEFBRUUsQUFtQkUsQUFNUDs7Ozs7RUEzRDJCLGdCQUFNLEEsQUE4RHBDOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=