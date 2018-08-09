"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _routes = require("../routes");

var _organization = require("../ethereum/organization");

var _organization2 = _interopRequireDefault(_organization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/index.js?entry";


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "renderOrganizations",
    value: function renderOrganizations() {
      var _this2 = this;

      var items = this.props.organizations.map(function (organization, index) {
        return {
          header: _react2.default.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, organization[0]),
          description: _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }, _react2.default.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, organization[1], _react2.default.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          })), _react2.default.createElement(_routes.Link, {
            route: "/organizations/" + _this2.props.organizationAddr[index],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, "View Organization"))),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Open Organizations"), _react2.default.createElement(_routes.Link, { route: "/organizations/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", icon: true, labelPosition: "left", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "add", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), "Add Organization"))), this.renderOrganizations());
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var organizationAddr, organizations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedOrganizations().call();

              case 2:
                organizationAddr = _context.sent;
                _context.next = 5;
                return _promise2.default.all(organizationAddr.map(function (addr, index) {
                  var organization = (0, _organization2.default)(addr);
                  return organization.methods.getOrganizationDetails().call();
                }));

              case 5:
                organizations = _context.sent;

                console.log(organizationAddr);
                console.log(organizations);
                return _context.abrupt("return", { organizations: organizations, organizationAddr: organizationAddr });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJMYXlvdXQiLCJmYWN0b3J5IiwiTGluayIsIk9yZ2FuaXphdGlvbiIsIkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsIm9yZ2FuaXphdGlvbnMiLCJtYXAiLCJvcmdhbml6YXRpb24iLCJpbmRleCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwib3JnYW5pemF0aW9uQWRkciIsImZsdWlkIiwicmVuZGVyT3JnYW5pemF0aW9ucyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZE9yZ2FuaXphdGlvbnMiLCJjYWxsIiwiYWxsIiwiYWRkciIsImdldE9yZ2FuaXphdGlvbkRldGFpbHMiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBa0I7Ozs7Ozs7OztJLEFBRW5COzs7Ozs7Ozs7OzswQ0FnQmtCO21CQUNwQjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsSUFBSSxVQUFBLEFBQUMsY0FBRCxBQUFlLE9BQVUsQUFDbEU7O2tDQUNVLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUs7QUFBTDtBQUFBLFdBQUEsZUFESCxBQUNHLEFBQUssQUFBYSxBQUMxQjt1Q0FDRSxjQUFBOzt3QkFBQTswQkFBQSxBQUNFO0FBREY7QUFBQSxXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0c7QUFESDtBQUFBLDBCQUFBLEFBQ0csQUFBYSxBQUNkOzt3QkFBQTswQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFO0FBQUEsK0JBRUYsQUFBQzt1Q0FDMEIsT0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFEdEMsQUFDMkIsQUFBNEI7O3dCQUR2RDswQkFBQSxBQUdFO0FBSEY7QUFDRSw2QkFFQSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFYRCxBQUdILEFBS0UsQUFHRSxBQUlOO2lCQWZGLEFBQU8sQUFlRSxBQUVWO0FBakJRLEFBQ0w7QUFGSixBQUFjLEFBb0JkLE9BcEJjOzsyQ0FvQlAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFFQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxNQUF4QixNQUE2QixlQUE3QixBQUEyQyxRQUFPLFNBQWxEO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFMUixBQUVFLEFBQ0UsQUFDRSxBQU1ILDRCQVhMLEFBQ0UsQUFVRyxBQUFLLEFBR1g7Ozs7Ozs7Ozs7Ozt1QkFwRGdDLGtCQUFBLEFBQVEsUUFBUixBQUM1QiwyQkFENEIsQSxBQUU1Qjs7bUJBRkc7QTs7eUNBR3NCLEFBQVEscUJBQ2xDLEFBQWlCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ3BDO3NCQUFNLGVBQWUsNEJBQXJCLEFBQXFCLEFBQWEsQUFDbEM7eUJBQU8sYUFBQSxBQUFhLFFBQWIsQUFBcUIseUJBQTVCLEFBQU8sQUFBOEMsQUFDdEQ7QUFKeUIsQUFDMUIsQSxpQkFBQSxDQUQwQjs7bUJBQXRCO0EseUNBTU47O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxlQUFGLGVBQWlCLGtCQUFqQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBYlMsZ0JBQU0sQSxBQXlEMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL2FuYW50L0FuYW50L1Byb2plY3RzL1NlY3VyZS1Eb25hdGlvbiJ9