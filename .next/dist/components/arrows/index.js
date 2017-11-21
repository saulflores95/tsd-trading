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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mrhorse/Desktop/Projects/tsd-trading/components/arrows/index.js';


var Arrow = function (_Component) {
  (0, _inherits3.default)(Arrow, _Component);

  function Arrow() {
    (0, _classCallCheck3.default)(this, Arrow);

    return (0, _possibleConstructorReturn3.default)(this, (Arrow.__proto__ || (0, _getPrototypeOf2.default)(Arrow)).apply(this, arguments));
  }

  (0, _createClass3.default)(Arrow, [{
    key: 'goTo',
    value: function goTo(idName) {
      var el = global.document.getElementById(idName).scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('svg', { onClick: this.goTo.bind(this, 'two'), className: 'jsx-2633208864' + ' ' + 'arrows',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('path', { d: 'M0 0 L30 32 L60 0', className: 'jsx-2633208864' + ' ' + 'a1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('path', { d: 'M0 20 L30 52 L60 20', className: 'jsx-2633208864' + ' ' + 'a2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement('path', { d: 'M0 40 L30 72 L60 40', className: 'jsx-2633208864' + ' ' + 'a3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2633208864',
        css: '.arrows.jsx-2633208864{width:60px;height:72px;position:fixed;left:50%;margin-left:-30px;bottom:25vh;}.arrows.jsx-2633208864 path.jsx-2633208864{stroke:white;fill:transparent;stroke-width:1px;-webkit-animation:arrow-jsx-2633208864 2s infinite;animation:arrow-jsx-2633208864 2s infinite;-webkit-animation:arrow 2s infinite;}@-webkit-keyframes arrow-jsx-2633208864{0%{opacity:0;}40%{opacity:1;}80%{opacity:0;}100%{opacity:0;}}@keyframes arrow-jsx-2633208864{0%{opacity:0;}40%{opacity:1;}80%{opacity:0;}100%{opacity:0;}}@-webkit-keyframes arrow0%.jsx-2633208864{opacity:0;}40%.jsx-2633208864{opacity:1;}80%.jsx-2633208864{opacity:0;}100%.jsx-2633208864{opacity:0;}/*|*/.arrows.jsx-2633208864 path.a1.jsx-2633208864{-webkit-animation-delay:-1s;animation-delay:-1s;-webkit-animation-delay:-1s;}.arrows.jsx-2633208864 path.a2.jsx-2633208864{-webkit-animation-delay:-0.5s;animation-delay:-0.5s;-webkit-animation-delay:-0.5s;}.arrows.jsx-2633208864 path.a3.jsx-2633208864{-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-delay:0s;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXJyb3dzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlvQixBQUd1QixBQVNFLEFBUUQsQUFDQyxBQUNBLEFBQ0MsQUFJRixBQUNDLEFBQ0EsQUFDQyxBQUlLLEFBS0UsQUFLSCxVQXhCTCxBQUNDLEFBQ0EsQUFDQyxBQUlGLEFBQ0MsQUFDQSxBQUNDLENBMUJILEVBU0ssVUFSRixPQVNFLFFBUlIsUUF1Q2lCLENBdENSLEFBUVUsQ0FvQkQsSUFLRSxhQWhDakIsUUFzQ2IsR0FWQSxDQTNCQSxLQWdDQSwyREF6QnFDLG9DQUNyQyIsImZpbGUiOiJjb21wb25lbnRzL2Fycm93cy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tcmhvcnNlL0Rlc2t0b3AvUHJvamVjdHMvdHNkLXRyYWRpbmciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ29UbyhpZE5hbWUpIHtcbiAgICBsZXQgZWwgPSBnbG9iYWwuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWROYW1lKS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6ICdlbmQnLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhcnJvd3NcIiBvbkNsaWNrPXt0aGlzLmdvVG8uYmluZCh0aGlzLCAndHdvJyl9PlxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJhMVwiIGQ9XCJNMCAwIEwzMCAzMiBMNjAgMFwiPjwvcGF0aD5cbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiYTJcIiBkPVwiTTAgMjAgTDMwIDUyIEw2MCAyMFwiPjwvcGF0aD5cbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiYTNcIiBkPVwiTTAgNDAgTDMwIDcyIEw2MCA0MFwiPjwvcGF0aD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcnJvd3Mge1xuICAgICAgICAgIFx0d2lkdGg6IDYwcHg7XG4gICAgICAgICAgXHRoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgXHRwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgXHRsZWZ0OiA1MCU7XG4gICAgICAgICAgXHRtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICAgICAgXHRib3R0b206IDI1dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFycm93cyBwYXRoIHtcbiAgICAgICAgICBcdHN0cm9rZTogd2hpdGU7XG4gICAgICAgICAgXHRmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBcdHN0cm9rZS13aWR0aDogMXB4O1xuICAgICAgICAgIFx0YW5pbWF0aW9uOiBhcnJvdyAycyBpbmZpbml0ZTtcbiAgICAgICAgICBcdC13ZWJraXQtYW5pbWF0aW9uOiBhcnJvdyAycyBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGFycm93IHtcbiAgICAgICAgICAgIDAlIHtvcGFjaXR5OjB9XG4gICAgICAgICAgICA0MCUge29wYWNpdHk6MX1cbiAgICAgICAgICAgIDgwJSB7b3BhY2l0eTowfVxuICAgICAgICAgICAgMTAwJSB7b3BhY2l0eTowfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBhcnJvdyB7XG4gICAgICAgICAgICAwJSB7b3BhY2l0eTowfVxuICAgICAgICAgICAgNDAlIHtvcGFjaXR5OjF9XG4gICAgICAgICAgICA4MCUge29wYWNpdHk6MH1cbiAgICAgICAgICAgIDEwMCUge29wYWNpdHk6MH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXJyb3dzIHBhdGguYTEge1xuICAgICAgICAgIFx0YW5pbWF0aW9uLWRlbGF5Oi0xcztcbiAgICAgICAgICBcdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xczsgLyogU2FmYXJpIOWSjCBDaHJvbWUgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXJyb3dzIHBhdGguYTIge1xuICAgICAgICAgIFx0YW5pbWF0aW9uLWRlbGF5Oi0wLjVzO1xuICAgICAgICAgIFx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTAuNXM7IC8qIFNhZmFyaSDlkowgQ2hyb21lICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFycm93cyBwYXRoLmEzIHtcbiAgICAgICAgICBcdGFuaW1hdGlvbi1kZWxheTowcztcbiAgICAgICAgICBcdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzOyAvKiBTYWZhcmkg5ZKMIENocm9tZSAqL1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zdmc+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/arrows/index.js */'
      }));
    }
  }]);

  return Arrow;
}(_react.Component);

exports.default = Arrow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXJyb3dzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQXJyb3ciLCJpZE5hbWUiLCJlbCIsImdsb2JhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJnb1RvIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUVLOzs7Ozs7Ozs7Ozt5QkFDZCxBLFFBQVEsQUFDWDtVQUFJLEtBQUssT0FBQSxBQUFPLFNBQVAsQUFBZ0IsZUFBaEIsQUFBK0IsUUFBL0IsQUFBdUMsZUFBZSxFQUFDLE9BQUQsQUFBUSxPQUFPLFVBQTlFLEFBQVMsQUFBc0QsQUFBeUIsQUFDekY7Ozs7NkJBQ1EsQUFDUDs2QkFDRSxjQUFBLFNBQXdCLFNBQVMsS0FBQSxBQUFLLEtBQUwsQUFBVSxLQUFWLEFBQWUsTUFBaEQsQUFBaUMsQUFBcUIsNENBQXRELEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLDBDQUN1QixHQUFyQixBQUF1Qix5REFBdkIsQUFBZ0I7O29CQUFoQjtzQkFERixBQUNFLEFBQ0E7QUFEQTtrREFDcUIsR0FBckIsQUFBdUIsMkRBQXZCLEFBQWdCOztvQkFBaEI7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ3FCLEdBQXJCLEFBQXVCLDJEQUF2QixBQUFnQjs7b0JBQWhCO3NCQUhGLEFBR0U7QUFBQTs7aUJBSEY7YUFERixBQUNFLEFBcURIO0FBckRHOzs7OztBQU42QixBOztrQkFBZCxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21yaG9yc2UvRGVza3RvcC9Qcm9qZWN0cy90c2QtdHJhZGluZyJ9