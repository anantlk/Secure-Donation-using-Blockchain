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

var _campaign = require("../../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

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
            lineNumber: 26
          }
        }, _web2.default.utils.fromWei(_this.props.balance, "ether")),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Requests",
        meta: "Total Number Of Requests",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _this.props.requests),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Contributors",
        meta: "Number of people who donated",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _this.props.contributors),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Minimum Contibution",
        meta: "Minimum value to contribute",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _this.props.minContributions),
        style: { overflowWrap: "break-word" }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Conribute To This Organization"), _react2.default.createElement(_ContributeForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }))));
    }
  }]);

  return OrganizationShow;
}(_react2.default.Component);

OrganizationShow.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var campaign, summary;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _campaign2.default)(props.query.address);

          case 2:
            campaign = _context.sent;
            _context.next = 5;
            return campaign.methods.getSummary().call();

          case 5:
            summary = _context.sent;

            console.log(summary);
            return _context.abrupt("return", {
              minContributions: summary[0],
              balance: summary[1],
              requests: summary[2],
              contributors: summary[3]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvc2hvd09yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhbXBhaWduIiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJDb250cmlidXRlRm9ybSIsIndlYjMiLCJPcmdhbml6YXRpb25TaG93IiwicmVuZGVyQ2FyZHMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInByb3BzIiwiYmFsYW5jZSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVxdWVzdHMiLCJjb250cmlidXRvcnMiLCJtaW5Db250cmlidXRpb25zIiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7Z08sQUFhSixjQUFjLFlBQU0sQUFDbEI7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUNBQWEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsU0FBQSxnQkFBSyxBQUFLLE1BQUwsQUFBVyxRQUFRLE1BQUEsQUFBSyxNQUF4QixBQUE4QixTQUhsRCxBQUdlLEFBQUssQUFBdUMsQUFDekQ7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFPWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUNBQWEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsU0FBQSxRQUFLLEFBQUssTUFIekIsQUFHZSxBQUFnQixBQUM3QjtlQUFPLEVBQUUsY0FYQyxBQU9aLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUNBQWEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsU0FBQSxRQUFLLEFBQUssTUFIekIsQUFHZSxBQUFnQixBQUM3QjtlQUFPLEVBQUUsY0FqQkMsQUFhWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUFhLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFNBQUEsUUFBSyxBQUFLLE1BSHpCLEFBR2UsQUFBZ0IsQUFDN0I7ZUFBTyxFQUFFLGNBdkJiLEFBQWMsQUFtQlosQUFJUyxBQUFnQixBQUkzQjtBQVJFLEFBQ0U7OzJDQU9HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7QTs7Ozs7NkJBRUEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBc0I7b0JBQXRCO3NCQUFBLEFBQTRCO0FBQTVCO2NBREYsQUFDRSxBQUE0QixBQUFLLEFBQ2pDLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBc0I7b0JBQXRCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsbURBQUEsQUFBQzs7b0JBQUQ7c0JBTlIsQUFDRSxBQUNFLEFBRUUsQUFFRSxBQUtUO0FBTFM7QUFBQTs7Ozs7RUFsRG1CLGdCLEFBQU07O0EsQUFBL0IsaUJBQ0csQTt1RkFBa0IsaUJBQUEsQUFBTSxPQUFOO2tCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ0Esd0JBQVMsTUFBQSxBQUFNLE1BRGYsQUFDQSxBQUFxQjs7ZUFBdEM7QUFEaUIsZ0NBQUE7NEJBQUE7bUJBRUQsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFGaEIsQUFFRCxBQUE4Qjs7ZUFBOUM7QUFGaUIsK0JBR3ZCOztvQkFBQSxBQUFRLElBSGUsQUFHdkIsQUFBWTs7Z0NBRVEsUUFEYixBQUNhLEFBQVEsQUFDMUI7dUJBQVMsUUFGSixBQUVJLEFBQVEsQUFDakI7d0JBQVUsUUFITCxBQUdLLEFBQVEsQUFDbEI7NEJBQWMsUUFSTyxBQUloQixBQUlTLEFBQVE7QUFKakIsQUFDTDs7ZUFMcUI7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBOzs7OztBQXlEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd09yZ2FuaXphdGlvbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=