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

var _arrows = require('../arrows');

var _arrows2 = _interopRequireDefault(_arrows);

var _content = require('../content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mrhorse/Desktop/Projects/tsd-trading/components/home/index.js';


var home = function (_Component) {
  (0, _inherits3.default)(home, _Component);

  function home() {
    (0, _classCallCheck3.default)(this, home);

    return (0, _possibleConstructorReturn3.default)(this, (home.__proto__ || (0, _getPrototypeOf2.default)(home)).apply(this, arguments));
  }

  (0, _createClass3.default)(home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-666113115' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('div', { id: 'one', className: 'jsx-666113115' + ' ' + 'banner',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-666113115' + ' ' + 'video-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('video', { autoPlay: true, loop: true, muted: true, className: 'jsx-666113115',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('source', { src: 'static/cement_stock.mp4', type: 'video/mp4', className: 'jsx-666113115',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), 'Your browser does not support the video tag.'), _react2.default.createElement('div', {
        className: 'jsx-666113115' + ' ' + 'overlay-desc',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-666113115',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'TSD Trading Inc.'))), _react2.default.createElement(_arrows2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), _react2.default.createElement('div', { id: 'two', className: 'jsx-666113115' + ' ' + 'banner',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_content2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), _react2.default.createElement('div', { id: 'three', className: 'jsx-666113115' + ' ' + 'banner',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Three'), _react2.default.createElement(_style2.default, {
        styleId: '666113115',
        css: '.banner.jsx-666113115{min-width:100vw;height:100vh;}#one.jsx-666113115{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#one.jsx-666113115 h1.jsx-666113115{font-size:8rem;color:#fff;max-width:calc(100vw - 80px);line-height:1em;-webkit-letter-spacing:-.03em;-moz-letter-spacing:-.03em;-ms-letter-spacing:-.03em;letter-spacing:-.03em;position:relative;}#two.jsx-666113115{background-color:white;}#three.jsx-666113115{background-color:green;}.container.jsx-666113115{margin:0;padding:0;}.video-container.jsx-666113115{position:fixed;min-height:100vh;z-index:-1;}video.jsx-666113115{vertical-align:middle;width:100vw;min-height:100%;}.overlay-desc.jsx-666113115{background:rgba(0,0,0,0);position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-letter-spacing:10px;-moz-letter-spacing:10px;-ms-letter-spacing:10px;letter-spacing:10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm9CLEFBRzRCLEFBSUYsQUFLRSxBQVFRLEFBR0EsQUFHZCxBQUlNLEFBS08sQUFLRyxTQWJmLE1BZEMsQUFrQk0sQ0EzQkosR0F3QmYsR0FRYSxDQWZiLEFBR0EsRUFpQm9CLENBM0JXLEdBVC9CLEdBMkJZLEVBS00sU0FKbEIsQUFTUSxNQUFTLENBSmpCLEtBdkJrQixFQTJCUyxTQUFRLEtBMUJYLEVBMkJULENBbkNNLHlFQW9DQSxvQkFuQ0ksU0FRTixrQkFDbkIsOENBNEJFLDBCQXBDRix5RUFvQ3NCLGlHQUV0QiIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL1Byb2plY3RzL3RzZC10cmFkaW5nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnJvd3MgZnJvbSAnLi4vYXJyb3dzJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29udGVudCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhbm5lcicgaWQ9J29uZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWRlby1jb250YWluZXInPlxuICAgICAgICBcdCAgIDx2aWRlbyBhdXRvUGxheSBsb29wIG11dGVkPlxuICAgICAgICBcdFx0ICAgICA8c291cmNlIHNyYz0nc3RhdGljL2NlbWVudF9zdG9jay5tcDQnIHR5cGU9J3ZpZGVvL21wNCcgLz5cbiAgICAgICAgXHRcdCAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgXHQgICA8L3ZpZGVvPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVybGF5LWRlc2MnPlxuICAgICAgICAgICAgICAgIDxoMT5UU0QgVHJhZGluZyBJbmMuPC9oMT5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICA8QXJyb3dzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFubmVyJyBpZD0ndHdvJz5cbiAgICAgICAgICA8Q29udGVudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhbm5lcicgaWQ9J3RocmVlJz5cbiAgICAgICAgVGhyZWVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDoxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNvbmUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI29uZSBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDgwcHgpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAzZW07XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3R3byB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3RocmVlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3ZlcmxheS1kZXNjIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcblxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/home/index.js */'
      }));
    }
  }]);

  return home;
}(_react.Component);

exports.default = home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFycm93cyIsIkNvbnRlbnQiLCJob21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUNDOzs7Ozs7Ozs7Ozs2QkFDVCxBQUNSOzZCQUNFLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFNBQXdCLElBQXhCLEFBQTJCLDBDQUEzQixBQUFlOztvQkFBZjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBLFdBQU8sVUFBUCxNQUFnQixNQUFoQixNQUFxQixPQUFyQixpQkFBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO21EQUNXLEtBQVIsQUFBWSwyQkFBMEIsTUFBdEMsQUFBMkMsd0JBQTNDOztvQkFBQTtzQkFESCxBQUNHO0FBQUE7VUFGUCxBQUNJLEFBSUMsaUVBQUEsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNHO0FBREg7QUFBQSx5QkFDRyxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FQUixBQUNBLEFBS0ssQUFDRyxBQUdOLHVDQUFBLEFBQUM7O29CQUFEO3NCQVhKLEFBQ0UsQUFVRSxBQUVGO0FBRkU7QUFBQSwyQkFFRixjQUFBLFNBQXdCLElBQXhCLEFBQTJCLDBDQUEzQixBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBZEosQUFhRSxBQUNFLEFBRUY7QUFGRTtBQUFBLDJCQUVGLGNBQUEsU0FBd0IsSUFBeEIsQUFBMkIsNENBQTNCLEFBQWU7O29CQUFmO3NCQUFBO0FBQUE7U0FoQkYsQUFnQkU7aUJBaEJGO2FBREYsQUFDRSxBQXNFSDtBQXRFRzs7Ozs7QUFINEIsQTs7a0JBQWIsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tcmhvcnNlL0Rlc2t0b3AvUHJvamVjdHMvdHNkLXRyYWRpbmcifQ==