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
      return 1;
      // const items = this.props.organizations.map(address => {
      //   return {
      //     header: this.props.name,
      //     content: this.props.desc,
      //     description: (
      //       <Link route={`/organizations/${address}`}>
      //         <a>View Organization</a>
      //       </Link>
      //     ),
      //     fluid: true
      //   };
      // });

      // return <Card.Group items={items} />;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Open Organizations"), _react2.default.createElement(_routes.Link, { route: "/organizations/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", icon: true, labelPosition: "left", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "add", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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

                console.log(organizationAddr);
                _context.next = 6;
                return _promise2.default.all(organizationAddr.map(function (addr, index) {
                  var organization = (0, _organization2.default)(addr);
                  return organization.methods.getOrganizationDetails().call();
                }));

              case 6:
                organizations = _context.sent;

                console.log(organizations);
                return _context.abrupt("return", { organizations: organizations });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJMYXlvdXQiLCJmYWN0b3J5IiwiTGluayIsIk9yZ2FuaXphdGlvbiIsIkluZGV4IiwicmVuZGVyT3JnYW5pemF0aW9ucyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZE9yZ2FuaXphdGlvbnMiLCJjYWxsIiwib3JnYW5pemF0aW9uQWRkciIsImNvbnNvbGUiLCJsb2ciLCJhbGwiLCJtYXAiLCJhZGRyIiwiaW5kZXgiLCJvcmdhbml6YXRpb24iLCJnZXRPcmdhbml6YXRpb25EZXRhaWxzIiwib3JnYW5pemF0aW9ucyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWtCOzs7Ozs7Ozs7SUFFbkIsQTs7Ozs7Ozs7Ozs7MENBaUJrQixBQUNwQjthQUFBLEFBQU8sQUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDRDs7Ozs2QkFDUSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxNQUF4QixNQUE2QixlQUE3QixBQUEyQyxRQUFPLFNBQWxEO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFMUixBQUVFLEFBQ0UsQUFDRSxBQU1ILDRCQVhMLEFBQ0UsQUFVRyxBQUFLLEFBR1g7Ozs7Ozs7Ozs7Ozt1QkEvQ2dDLGtCQUFBLEFBQVEsUUFBUixBQUM1QiwyQkFENEIsQSxBQUU1Qjs7bUJBRkc7QSw0Q0FJTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3lDQUNnQixBQUFRLHFCQUNsQyxBQUFpQixJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUNwQztzQkFBTSxlQUFlLDRCQUFyQixBQUFxQixBQUFhLEFBQ2xDO3lCQUFPLGFBQUEsQUFBYSxRQUFiLEFBQXFCLHlCQUE1QixBQUFPLEFBQThDLEFBQ3REO0FBSnlCLEFBQzFCLEEsaUJBQUEsQ0FEMEI7O21CQUF0QjtBLHlDQU1OOzt3QkFBQSxBQUFRLElBQVIsQUFBWTtpREFDTCxFQUFFLGVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWRTLGdCQUFNLEEsQUFvRDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9tZWRpYS9hbmFudC9BbmFudC9Qcm9qZWN0cy9TZWN1cmUtRG9uYXRpb24ifQ==