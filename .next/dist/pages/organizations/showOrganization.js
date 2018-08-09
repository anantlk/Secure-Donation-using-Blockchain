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

var _organization = require("../../ethereum/organization.js");

var _organization2 = _interopRequireDefault(_organization);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/showOrganization.js?entry",
    _this2 = undefined;

var OrganizationShow = function (_React$Component) {
  (0, _inherits3.default)(OrganizationShow, _React$Component);

  function OrganizationShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, OrganizationShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = OrganizationShow.__proto__ || (0, _getPrototypeOf2.default)(OrganizationShow)).call.apply(_ref, [this].concat(args))), _this), _this.renderCards = function () {
      var items = [{
        header: "Donation Amount",
        meta: "Total amount donated in the organization",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _web2.default.utils.fromWei(_this.props.balance, "ether")),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Requests",
        meta: "Total Number Of Requests",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _this.props.requests),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Contributors",
        meta: "Number of people who donated",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _this.props.contributors),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Minimum Contibution",
        meta: "Minimum value to contribute",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _this.props.minContributions),
        style: { overflowWrap: "break-word" }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(OrganizationShow, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.props.name), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Contribute To This Organization"), _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "View Requests"))), _react2.default.createElement(_routes.Link, { route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: "left", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "left arrow", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), "Back")))))));
    }
  }]);

  return OrganizationShow;
}(_react2.default.Component);

OrganizationShow.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var organization, summary, name;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            organization = (0, _organization2.default)(props.query.address);
            _context.next = 3;
            return organization.methods.getSummary().call();

          case 3:
            summary = _context.sent;
            _context.next = 6;
            return organization.methods.organizationName().call();

          case 6:
            name = _context.sent;
            return _context.abrupt("return", {
              address: props.query.address,
              minContributions: summary[0],
              balance: summary[1],
              requests: summary[2],
              contributors: summary[3],
              name: name
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = OrganizationShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvc2hvd09yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk9yZ2FuaXphdGlvbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiSWNvbiIsIkxheW91dCIsIkNvbnRyaWJ1dGVGb3JtIiwid2ViMyIsIkxpbmsiLCJPcmdhbml6YXRpb25TaG93IiwicmVuZGVyQ2FyZHMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInByb3BzIiwiYmFsYW5jZSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVxdWVzdHMiLCJjb250cmlidXRvcnMiLCJtaW5Db250cmlidXRpb25zIiwibmFtZSIsImFkZHJlc3MiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmdhbml6YXRpb24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJvcmdhbml6YXRpb25OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBUyxBQUFNLEFBQU0sQUFBUTs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7O2dPLEFBZUosY0FBYyxZQUFNLEFBQ2xCO1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUFhLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFNBQUEsZ0JBQUssQUFBSyxNQUFMLEFBQVcsUUFBUSxNQUFBLEFBQUssTUFBeEIsQUFBOEIsU0FIbEQsQUFHZSxBQUFLLEFBQXVDLEFBQ3pEO2VBQU8sRUFBRSxjQUxDLEFBQ1osQUFJUyxBQUFnQjtBQUp6QixBQUNFLE9BRlU7Z0JBT1osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUFhLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFNBQUEsUUFBSyxBQUFLLE1BSHpCLEFBR2UsQUFBZ0IsQUFDN0I7ZUFBTyxFQUFFLGNBWEMsQUFPWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUFhLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFNBQUEsUUFBSyxBQUFLLE1BSHpCLEFBR2UsQUFBZ0IsQUFDN0I7ZUFBTyxFQUFFLGNBakJDLEFBYVosQUFJUyxBQUFnQjtBQUp6QixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQ0FBYSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBLFFBQUssQUFBSyxNQUh6QixBQUdlLEFBQWdCLEFBQzdCO2VBQU8sRUFBRSxjQXZCYixBQUFjLEFBbUJaLEFBSVMsQUFBZ0IsQUFJM0I7QUFSRSxBQUNFOzsyQ0FPRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBO0E7Ozs7OzZCQUVBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFEWixBQUNFLEFBQWdCLEFBQ2hCLHVCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFDOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvREFBQSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFMTixBQUNFLEFBRUUsQUFFRSxBQUlKO0FBSkk7NEJBSUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssMkJBQXlCLEtBQUEsQUFBSyxNQUE5QixBQUFvQyxVQUExQztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLG9DQUFBLEFBQUMsOEJBQUssT0FBTjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxNQUFSLE1BQWEsZUFBYixBQUEyQixRQUFPLFNBQWxDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUF0QmhCLEFBQ0UsQUFFRSxBQVNFLEFBQ0UsQUFNRSxBQUNFLEFBQ0UsQUFXZjs7Ozs7RUE5RTRCLGdCQUFNLEE7O0EsQUFBL0IsaUIsQUFDRzt1RkFBa0IsaUJBQUEsQUFBTSxPQUFOOytCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQ2pCO0FBRGlCLDJCQUNGLDRCQUFhLE1BQUEsQUFBTSxNQURqQixBQUNGLEFBQXlCOzRCQUR2QjttQkFFRCxhQUFBLEFBQWEsUUFBYixBQUFxQixhQUZwQixBQUVELEFBQWtDOztlQUFsRDtBQUZpQiwrQkFBQTs0QkFBQTttQkFHSixhQUFBLEFBQWEsUUFBYixBQUFxQixtQkFIakIsQUFHSixBQUF3Qzs7ZUFBckQ7QUFIaUIsNEJBQUE7O3VCQUtaLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO2dDQUFrQixRQUZiLEFBRWEsQUFBUSxBQUMxQjt1QkFBUyxRQUhKLEFBR0ksQUFBUSxBQUNqQjt3QkFBVSxRQUpMLEFBSUssQUFBUSxBQUNsQjs0QkFBYyxRQUxULEFBS1MsQUFBUSxBQUN0QjtvQkFWcUIsQUFJaEIsQUFNQztBQU5ELEFBQ0w7O2VBTHFCO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QTs7Ozs7QUFnRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dPcmdhbml6YXRpb24uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL2FuYW50L0FuYW50L1Byb2plY3RzL1NlY3VyZS1Eb25hdGlvbiJ9