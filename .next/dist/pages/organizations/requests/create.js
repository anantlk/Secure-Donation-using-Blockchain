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

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _organization = require("../../../ethereum/organization");

var _organization2 = _interopRequireDefault(_organization);

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/requests/create.js?entry";


var NewRequest = function (_React$Component) {
  (0, _inherits3.default)(NewRequest, _React$Component);

  function NewRequest() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewRequest.__proto__ || (0, _getPrototypeOf2.default)(NewRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: "",
      value: "",
      recipient: "",
      loading: false,
      errMessage: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var organization, accounts, _this$state, description, value, recipient;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({
                  errMessage: "",
                  loading: true
                });
                organization = (0, _organization2.default)(_this.props.address);
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                _context.next = 10;
                return organization.methods.createRequest(description, recipient, _web2.default.utils.toWei(value, "ether")).send({
                  from: accounts[0]
                });

              case 10:
                _routes.Router.pushRoute("/organizations/" + _this.props.address + "/requests");
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);

                _this.setState({
                  errMessage: _context.t0.message
                });

              case 16:
                _this.setState({
                  loading: false
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewRequest, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "New Request"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({
            description: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Amount"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({
            value: event.target.value
          });
        },
        label: "ether",
        labelPosition: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Error!"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.state.errMessage)), _react2.default.createElement(_semanticUiReact.Button, { floated: "left", loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Submit"), _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: "left", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "left arrow", __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), "Back")))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var address = props.query.address;

      return { address: address };
    }
  }]);

  return NewRequest;
}(_react2.default.Component);

exports.default = NewRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvcmVxdWVzdHMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkljb24iLCJ3ZWIzIiwiT3JnYW5pemF0aW9uIiwiTGF5b3V0IiwiTGluayIsIlJvdXRlciIsIk5ld1JlcXVlc3QiLCJzdGF0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwib3JnYW5pemF0aW9uIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFPLEFBQVMsQUFBUTs7QUFDdkMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0lBRXZCLEE7Ozs7Ozs7Ozs7Ozs7OztvTixBQUNKO21CQUFRLEFBQ08sQUFDYjthQUZNLEFBRUMsQUFDUDtpQkFITSxBQUdLLEFBQ1g7ZUFKTSxBQUlHLEFBQ1Q7a0IsQUFMTSxBQUtNO0FBTE4sQUFDTixhQVlGLEE7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3FFQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSzs4QkFBUyxBQUNBLEFBQ1o7MkJBRkYsQUFBYyxBQUVILEFBRUw7QUFKUSxBQUNaO0FBSE8sK0JB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QUFBZ0IsUUFBTyxTQUFTLEtBQUEsQUFBSyxNQUFyQyxBQUEyQyxTQUFTLFNBQXBEO29CQUFBO3NCQUFBO0FBQUE7U0F0Q0YsQUFzQ0UsQUFHQSwyQkFBQSxBQUFDLDhCQUFLLDJCQUF5QixLQUFBLEFBQUssTUFBOUIsQUFBb0MsVUFBMUM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sTUFBUixNQUFhLGVBQWIsQUFBNkIsUUFBTyxTQUFwQztvQkFBQTtzQkFBQSxBQUE0QztBQUE1Qzt5QkFBNEMsQUFBQyx1Q0FBSyxNQUFOLEFBQWE7b0JBQWI7c0JBQTVDLEFBQTRDO0FBQUE7VUE5Q3RELEFBQ0UsQUFFRSxBQXlDRSxBQUNFLEFBQ0UsQUFNWDs7OztvQ0FuRnNCLEEsT0FBTztVQUFBLEFBQ3BCLFVBQVksTUFEUSxBQUNGLE1BREUsQUFDcEIsQUFDUjs7YUFBTyxFQUFFLFNBQVQsQUFBTyxBQUNSOzs7OztFQVpzQixnQkFBTSxBLEFBK0YvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjcmVhdGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL2FuYW50L0FuYW50L1Byb2plY3RzL1NlY3VyZS1Eb25hdGlvbiJ9