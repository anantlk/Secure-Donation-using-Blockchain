webpackHotUpdate(7,{

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = __webpack_require__(482);

var _semanticUiReact = __webpack_require__(450);

var _web = __webpack_require__(526);

var _web2 = _interopRequireDefault(_web);

var _Layout = __webpack_require__(1171);

var _Layout2 = _interopRequireDefault(_Layout);

var _organization = __webpack_require__(730);

var _organization2 = _interopRequireDefault(_organization);

var _RenderRow = __webpack_require__(1174);

var _RenderRow2 = _interopRequireDefault(_RenderRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/requests/index.js?entry";


var ViewRequests = function (_React$Component) {
  (0, _inherits3.default)(ViewRequests, _React$Component);

  function ViewRequests() {
    (0, _classCallCheck3.default)(this, ViewRequests);

    return (0, _possibleConstructorReturn3.default)(this, (ViewRequests.__proto__ || (0, _getPrototypeOf2.default)(ViewRequests)).apply(this, arguments));
  }

  (0, _createClass3.default)(ViewRequests, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RenderRow2.default, {
          id: index,
          request: request,
          key: index,
          approversCount: _this2.props.approverCount,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Add Request"))), _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: "left", floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "left arrow", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), "Back"))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Approvals"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var _this3 = this;

        var address, accounts, organization, requestCount, num, approverCount, requests, allowedApprovers, dict;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                _context2.next = 6;
                return (0, _organization2.default)(address);

              case 6:
                organization = _context2.sent;
                _context2.next = 9;
                return organization.methods.getRequestsCount().call();

              case 9:
                requestCount = _context2.sent;
                _context2.next = 12;
                return organization.methods.num().call();

              case 12:
                num = _context2.sent;
                _context2.next = 15;
                return organization.methods.approversCount().call();

              case 15:
                approverCount = _context2.sent;
                requests = void 0;
                _context2.next = 19;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return organization.methods.requests(index).call();
                }));

              case 19:
                requests = _context2.sent;
                allowedApprovers = {};

                console.log(num);
                console.log(requests);
                _context2.next = 25;
                return _promise2.default.all(requests.map(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, index) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _promise2.default.all(Array(parseInt(num)).fill().map(function (ele, index) {
                              console.log(request.id);
                              return organization.methods.reqApprovers(parseInt(request.id), index).call();
                            }));

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, _this3);
                  }));

                  return function (_x2, _x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 25:
                dict = _context2.sent;

                console.log(dict);

                return _context2.abrupt("return", { address: address, requests: requests, approverCount: approverCount });

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ViewRequests;
}(_react2.default.Component);

exports.default = ViewRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvcmVxdWVzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiVGFibGUiLCJEaW1tZXIiLCJMb2FkZXIiLCJJbWFnZSIsIlNlZ21lbnQiLCJJY29uIiwid2ViMyIsIkxheW91dCIsIk9yZ2FuaXphdGlvbiIsIlJlbmRlclJvdyIsIlZpZXdSZXF1ZXN0cyIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhcHByb3ZlckNvdW50IiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm9yZ2FuaXphdGlvbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsIm51bSIsImFwcHJvdmVyc0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiYWxsb3dlZEFwcHJvdmVycyIsImNvbnNvbGUiLCJsb2ciLCJlbGUiLCJpZCIsInJlcUFwcHJvdmVycyIsImRpY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFlOzs7Ozs7Ozs7SUFFaEIsQTs7Ozs7Ozs7Ozs7aUNBbUNTO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUNFLEFBQUM7Y0FBRCxBQUNNLEFB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LEFBQWEsUUFBYixBQUFxQixTQUFyQixBQUE4QixPQUFyQyxBQUFPLEFBQXFDLEFBQzdDO0EsQUFMWSxBQUNmLGlCQUFBLENBRGU7O21CQUFqQjtBLHFDQVFJO0EsbUMsQUFBbUIsQUFDdkI7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3lDQUNPLEFBQVEsYUFBSSxBQUFTLGdCQUFUO3VHQUFhLGlCQUFBLEFBQU8sU0FBUCxBQUFlLE9BQWY7a0ZBQUE7Z0NBQUE7eURBQUE7K0JBQUE7NENBQUE7cURBQzdCLEFBQVEsVUFDYixTQUFOLEFBQU0sQUFBUyxNQUFmLEFBQXFCLE9BQXJCLEFBQTRCLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBSyxPQUFVLEFBQzdDO3NDQUFBLEFBQVEsSUFBSSxRQUFaLEFBQW9CLEFBQ3BCO3FDQUFPLGFBQUEsQUFBYSxRQUFiLEFBQXFCLGFBQWEsU0FBUyxRQUEzQyxBQUFrQyxBQUFpQixLQUFuRCxBQUF1RCxPQUE5RCxBQUFPLEFBQThELEFBQ3RFO0FBTHVDLEFBQzdCLEFBQ1gsNkJBQUEsQ0FEVzs7K0JBRDZCO3NFQUFBOzsrQkFBQTsrQkFBQTs0Q0FBQTs7QUFBQTtnQ0FBQTtBQUFiOzs2Q0FBQTs2Q0FBQTtBQUFBO0FBQVosQSxtQkFBWSxDQUFaOzttQkFBYjtBLGlDQVNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7a0RBRUwsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixlQUFyQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENnQixnQkFBTSxBLEFBMkZqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/requests/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/organizations/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5mY2M3MjM5ZGJiYTc0OTE5M2JlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvb3JnYW5pemF0aW9ucy9yZXF1ZXN0cz80NWFjZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIFRhYmxlLFxuICBEaW1tZXIsXG4gIExvYWRlcixcbiAgSW1hZ2UsXG4gIFNlZ21lbnQsXG4gIEljb25cbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS9vcmdhbml6YXRpb25cIjtcbmltcG9ydCBSZW5kZXJSb3cgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUmVuZGVyUm93XCI7XG5cbmNsYXNzIFZpZXdSZXF1ZXN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBhd2FpdCBPcmdhbml6YXRpb24oYWRkcmVzcyk7XG4gICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgb3JnYW5pemF0aW9uLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcbiAgICBjb25zdCBudW0gPSBhd2FpdCBvcmdhbml6YXRpb24ubWV0aG9kcy5udW0oKS5jYWxsKCk7XG4gICAgY29uc3QgYXBwcm92ZXJDb3VudCA9IGF3YWl0IG9yZ2FuaXphdGlvbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpO1xuXG4gICAgbGV0IHJlcXVlc3RzO1xuICAgIHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9yZ2FuaXphdGlvbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGxldCBhbGxvd2VkQXBwcm92ZXJzID0ge307XG4gICAgY29uc29sZS5sb2cobnVtKTtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0cyk7XG4gICAgY29uc3QgZGljdCA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzLm1hcChhc3luYyAocmVxdWVzdCxpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBBcnJheShwYXJzZUludChudW0pKS5maWxsKCkubWFwKChlbGUsaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmlkKTtcbiAgICAgICAgICByZXR1cm4gb3JnYW5pemF0aW9uLm1ldGhvZHMucmVxQXBwcm92ZXJzKHBhcnNlSW50KHJlcXVlc3QuaWQpLGluZGV4KS5jYWxsKCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSkpO1xuXG4gICAgY29uc29sZS5sb2coZGljdCk7XG5cbiAgICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgYXBwcm92ZXJDb3VudCB9O1xuICB9XG5cbiAgcmVuZGVyUm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVuZGVyUm93XG4gICAgICAgICAgaWQ9e2luZGV4fVxuICAgICAgICAgIHJlcXVlc3Q9e3JlcXVlc3R9XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBhcHByb3ZlcnNDb3VudD17dGhpcy5wcm9wcy5hcHByb3ZlckNvdW50fVxuICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHsvKiA8RGltbWVyIGFjdGl2ZSBpbnZlcnRlZD5cbiAgICAgICAgICA8TG9hZGVyIHNpemU9XCJsYXJnZVwiPlByb2Nlc3NpbmcgUmVxdWVzdCAuLi48L0xvYWRlcj5cbiAgICAgICAgPC9EaW1tZXI+ICovfVxuICAgICAgICA8TGluayByb3V0ZT17YC9vcmdhbml6YXRpb25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgcHJpbWFyeT5cbiAgICAgICAgICAgICAgQWRkIFJlcXVlc3RcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayByb3V0ZT17YC9vcmdhbml6YXRpb25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWB9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uIGxhYmVsUG9zaXRpb24gPSBcImxlZnRcIiBmbG9hdGVkPVwicmlnaHRcIiBwcmltYXJ5PlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lID0gXCJsZWZ0IGFycm93XCIvPlxuICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGgyPlJlcXVlc3RzPC9oMj5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbHM8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgPEJvZHk+e3RoaXMucmVuZGVyUm93cygpfTwvQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld1JlcXVlc3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvb3JnYW5pemF0aW9ucy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBTEE7QUFRQTtBQVJBO0FBQ0E7QUFRQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBbEZBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFFQTs7O0FBQ0E7QUFJQTtBQUhBO0FBQ0E7QUFGQTtBQVFBOzs7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakNBO0FBQ0E7QUEwRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==