webpackHotUpdate(6,{

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _campaign = __webpack_require__(1176);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(481);

var _Layout = __webpack_require__(986);

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = __webpack_require__(1178);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = __webpack_require__(1005);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/showOrganization.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/showOrganization.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/organizations/showOrganization")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5hZDgyZDNhYTYxN2NjODhhZjM2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvb3JnYW5pemF0aW9ucy9zaG93T3JnYW5pemF0aW9uLmpzP2UzMGQwZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbi5qc1wiO1xuaW1wb3J0IHsgQ2FyZCwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybVwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY2xhc3MgT3JnYW5pemF0aW9uU2hvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyBwcm9wcyA9PiB7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBhd2FpdCBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xuICAgIHJldHVybiB7XG4gICAgICBtaW5Db250cmlidXRpb25zOiBzdW1tYXJ5WzBdLFxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgIHJlcXVlc3RzOiBzdW1tYXJ5WzJdLFxuICAgICAgY29udHJpYnV0b3JzOiBzdW1tYXJ5WzNdXG4gICAgfTtcbiAgfTtcblxuICByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBcIkRvbmF0aW9uIEFtb3VudFwiLFxuICAgICAgICBtZXRhOiBcIlRvdGFsIGFtb3VudCBkb25hdGVkIGluIHRoZSBvcmdhbml6YXRpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IDxoMj57d2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMuYmFsYW5jZSwgXCJldGhlclwiKX08L2gyPixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IFwiUmVxdWVzdHNcIixcbiAgICAgICAgbWV0YTogXCJUb3RhbCBOdW1iZXIgT2YgUmVxdWVzdHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IDxoMj57dGhpcy5wcm9wcy5yZXF1ZXN0c308L2gyPixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IFwiQ29udHJpYnV0b3JzXCIsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIHBlb3BsZSB3aG8gZG9uYXRlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogPGgyPnt0aGlzLnByb3BzLmNvbnRyaWJ1dG9yc308L2gyPixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IFwiTWluaW11bSBDb250aWJ1dGlvblwiLFxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gdmFsdWUgdG8gY29udHJpYnV0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogPGgyPnt0aGlzLnByb3BzLm1pbkNvbnRyaWJ1dGlvbnN9PC9oMj4sXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGggPSB7MTB9ID57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoID0gezZ9PlxuICAgICAgICAgICAgPGgzPkNvbnJpYnV0ZSBUbyBUaGlzIE9yZ2FuaXphdGlvbjwvaDM+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZ2FuaXphdGlvblNob3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9vcmdhbml6YXRpb25zL3Nob3dPcmdhbml6YXRpb24uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFBQTs7Ozs7QUFsREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQXlEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==