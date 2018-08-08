"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routes = require("../../../routes");

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/requests/index.js?entry";


var ViewRequests = function (_React$Component) {
  (0, _inherits3.default)(ViewRequests, _React$Component);

  function ViewRequests() {
    (0, _classCallCheck3.default)(this, ViewRequests);

    return (0, _possibleConstructorReturn3.default)(this, (ViewRequests.__proto__ || (0, _getPrototypeOf2.default)(ViewRequests)).apply(this, arguments));
  }

  (0, _createClass3.default)(ViewRequests, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Add Request"))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var address = props.query.address;

      console.log(address);
      return { address: address };
    }
  }]);

  return ViewRequests;
}(_react2.default.Component);

exports.default = ViewRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvcmVxdWVzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiTGF5b3V0IiwiVmlld1JlcXVlc3RzIiwicHJvcHMiLCJhZGRyZXNzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs2QkFNSyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyw4QkFBSywyQkFBeUIsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFVBQTFDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQUpSLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFLVDs7OztvQ0Fmc0IsQSxPQUFPO1VBQUEsQUFDcEIsVUFBWSxNQURRLEFBQ0YsTUFERSxBQUNwQixBQUNSOztjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7YUFBTyxFQUFFLFNBQVQsQUFBTyxBQUNSOzs7OztFQUx3QixnQkFBTSxBLEFBbUJqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvbWVkaWEvYW5hbnQvQW5hbnQvUHJvamVjdHMvU2VjdXJlLURvbmF0aW9uIn0=