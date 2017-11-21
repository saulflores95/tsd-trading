'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mrhorse/Desktop/Projects/tsd-trading/components/wrapper/index.js';
// import ReactGA from 'react-ga'


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // This is going to be used for google analytics later one
      // ReactGA.initialize(//ID)
      // ReactGA.pageview(document.location.pathname)
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'wrapperHeight', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'TSD Trading Inc.'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=no', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'TSD Inc.', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'blue', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: 'white', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, '\n            .leaflet-container {\n              height: 100%;\n              width: 100%;\n            }\n            .leaflet-container a {\n              color: #2d517b;\n              text-decoration: none;\n              font-size: 15px;\n              font-family: \'Montserrat\', sans-serif;\n            }\n            .leaflet-control-attribution a {\n              display:none;\n            }\n            body {\n              background-color: white;\n              width: 100%;\n              height: 100%;\n              overflow-x:hidden;\n              font-family: Montserrat;\n              \n            }\n            .container {\n              height: 100vh;\n              width: 100%;\n            }\n            #__next {\n              height: 100vh;\n            }\n            ')), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.props.children));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd3JhcHBlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWQiLCJBcHAiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUVoQixBQUFPOzs7Ozs7O0FBRFA7OztJQUdxQixBOzs7Ozs7Ozs7Ozt3Q0FDRSxBQUNuQjtBQUNBO0FBQ0E7QUFDRDs7Ozs2QkFDUyxBQUNSOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsOEJBQTZCLFNBQXhDLEFBQWdEO29CQUFoRDtzQkFIRixBQUdFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsZ0NBQStCLFNBQTFDLEFBQWtEO29CQUFsRDtzQkFKRixBQUlFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcseUNBQXdDLFNBQW5ELEFBQTJEO29CQUEzRDtzQkFMRixBQUtFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsZUFBYyxTQUF6QixBQUFpQztvQkFBakM7c0JBTkYsQUFNRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLHNEQUFxRCxLQUFoRSxBQUFvRTtvQkFBcEU7c0JBUEYsQUFPRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQVJGLEFBUUUsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVZKLEFBQ0UsQUFTRSxBQWlDRiw2ekJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BN0NaLEFBQ0UsQUEyQ0UsQUFDYyxBQUluQjs7Ozs7QUF4RDhCLEE7O2tCQUFaLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL1Byb2plY3RzL3RzZC10cmFkaW5nIn0=