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

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mrhorse/Desktop/Projects/tsd-trading/components/img/index.js';


var Img = function (_Component) {
  (0, _inherits3.default)(Img, _Component);

  function Img() {
    (0, _classCallCheck3.default)(this, Img);

    return (0, _possibleConstructorReturn3.default)(this, (Img.__proto__ || (0, _getPrototypeOf2.default)(Img)).apply(this, arguments));
  }

  (0, _createClass3.default)(Img, [{
    key: 'renderChecker',
    value: function renderChecker(props) {
      if (props.flag === 'right') {
        return _react2.default.createElement(_reactGridSystem.Col, { lg: 6, md: 6, sm: 12, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-1132565900' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }, _react2.default.createElement('img', { src: props.img, alt: 'Avatar', className: 'jsx-1132565900' + ' ' + 'image',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }), _react2.default.createElement('div', {
          className: 'jsx-1132565900' + ' ' + 'overlay',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-1132565900' + ' ' + 'text',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, props.text))), _react2.default.createElement(_style2.default, {
          styleId: '1132565900',
          css: '.container.jsx-1132565900{position:relative;width:100%;height:300px;}.image.jsx-1132565900{display:block;width:100%;height:100%;}.overlay.jsx-1132565900{position:absolute;bottom:0;left:0;right:0;background-color:black;overflow:hidden;width:0;height:100%;-webkit-transition:.5s ease;transition:.5s ease;opacity:0.5;}.container.jsx-1132565900:hover .overlay.jsx-1132565900{width:100%;}.text.jsx-1132565900{white-space:nowrap;color:white;font-size:20px;position:absolute;overflow:hidden;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1nL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNzQixBQUdpQyxBQU1KLEFBTUksQUFhUCxBQUlRLFdBSHJCLEdBbkJhLElBTkEsQUFZRixDQWlCRyxNQXRCQSxFQU1MLEVBWk0sRUE2QkUsR0FoQlAsR0FOVixLQU5BLEFBYXlCLElBZ0JMLGtCQUNGLENBaEJBLGVBaUJSLENBaEJBLE9BaUJDLENBaEJHLFFBaUJvQixJQWhCWixnREFDUixZQUNkLHlDQWVzQyxtQ0FDdEMiLCJmaWxlIjoiY29tcG9uZW50cy9pbWcvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL1Byb2plY3RzL3RzZC10cmFkaW5nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWcgIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyQ2hlY2tlcihwcm9wcykge1xuICAgIGlmKHByb3BzLmZsYWcgPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgbGc9ezZ9IG1kPXs2fSBzbT17MTJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PSdBdmF0YXInIGNsYXNzTmFtZT0naW1hZ2UnIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmxheSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz57cHJvcHMudGV4dH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIGxnPXs2fSBtZD17Nn0gc209ezEyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWd9IGFsdD0nQXZhdGFyJyBjbGFzc05hbWU9J2ltYWdlJyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJsYXknPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dCc+e3Byb3BzLnRleHR9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0NvbD5cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJlbmRlckNoZWNrZXIodGhpcy5wcm9wcylcbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/img/index.js */'
        }));
      } else {
        return _react2.default.createElement(_reactGridSystem.Col, { lg: 6, md: 6, sm: 12, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-3534820197' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement('img', { src: props.img, alt: 'Avatar', className: 'jsx-3534820197' + ' ' + 'image',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }), _react2.default.createElement('div', {
          className: 'jsx-3534820197' + ' ' + 'overlay',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-3534820197' + ' ' + 'text',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, props.text))), _react2.default.createElement(_style2.default, {
          styleId: '3534820197',
          css: '.container.jsx-3534820197{position:relative;width:100%;height:300px;}.image.jsx-3534820197{display:block;width:100%;height:100%;}.overlay.jsx-3534820197{position:absolute;bottom:0;left:100%;right:0;background-color:black;overflow:hidden;width:0;height:100%;-webkit-transition:.5s ease;transition:.5s ease;opacity:0.5;}.container.jsx-3534820197:hover .overlay.jsx-3534820197{width:100%;left:0;}.text.jsx-3534820197{white-space:nowrap;color:white;font-size:20px;position:absolute;overflow:hidden;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1nL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fc0IsQUFHaUMsQUFLSixBQU1JLEFBY1AsQUFLUSxXQUpaLEdBcEJJLElBTEEsQUFXRixBQWVYLENBSWMsTUF4QkEsRUFNRixFQVhHLEVBOEJFLE1BeEJqQixBQU1VLEtBWFYsR0FZeUIsQ0FrQkwsa0JBQ0YsSUFsQkEsWUFtQlIsSUFsQkEsSUFtQkMsSUFsQkcsS0FtQm9CLE9BbEJaLGdEQUNSLFlBRWQsc0NBZ0JzQyxtQ0FDdEMiLCJmaWxlIjoiY29tcG9uZW50cy9pbWcvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL1Byb2plY3RzL3RzZC10cmFkaW5nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWcgIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyQ2hlY2tlcihwcm9wcykge1xuICAgIGlmKHByb3BzLmZsYWcgPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgbGc9ezZ9IG1kPXs2fSBzbT17MTJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PSdBdmF0YXInIGNsYXNzTmFtZT0naW1hZ2UnIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmxheSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz57cHJvcHMudGV4dH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIGxnPXs2fSBtZD17Nn0gc209ezEyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWd9IGFsdD0nQXZhdGFyJyBjbGFzc05hbWU9J2ltYWdlJyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJsYXknPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dCc+e3Byb3BzLnRleHR9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0NvbD5cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJlbmRlckNoZWNrZXIodGhpcy5wcm9wcylcbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/img/index.js */'
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderChecker(this.props);
    }
  }]);

  return Img;
}(_react.Component);

exports.default = Img;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1nL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNvbCIsIkltZyIsInByb3BzIiwiZmxhZyIsImltZyIsInRleHQiLCJyZW5kZXJDaGVja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBUzs7Ozs7OztJLEFBRVk7Ozs7Ozs7Ozs7O2tDLEFBQ0wsT0FBTyxBQUNuQjtVQUFHLE1BQUEsQUFBTSxTQUFULEFBQWtCLFNBQVMsQUFDekI7K0JBQ0UsQUFBQyxzQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCLEdBQUcsSUFBbkIsQUFBdUI7c0JBQXZCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7OENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ08sS0FBSyxNQUFWLEFBQWdCLEtBQUssS0FBckIsQUFBeUIsOENBQXpCLEFBQTRDOztzQkFBNUM7d0JBREYsQUFDRSxBQUNBO0FBREE7NEJBQ0EsY0FBQTs4Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOzhDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQXVCO0FBQXZCO0FBQUEsaUJBSk4sQUFDRSxBQUVFLEFBQ0UsQUFBNkI7bUJBSm5DO2VBREYsQUFDRSxBQW1ESDtBQW5ERztBQUZKLGFBcURPLEFBQ0w7K0JBQ0UsQUFBQyxzQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCLEdBQUcsSUFBbkIsQUFBdUI7c0JBQXZCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7OENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ08sS0FBSyxNQUFWLEFBQWdCLEtBQUssS0FBckIsQUFBeUIsOENBQXpCLEFBQTRDOztzQkFBNUM7d0JBREYsQUFDRSxBQUNBO0FBREE7NEJBQ0EsY0FBQTs4Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOzhDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQXVCO0FBQXZCO0FBQUEsaUJBSk4sQUFDRSxBQUVFLEFBQ0UsQUFBNkI7bUJBSm5DO2VBREYsQUFDRSxBQW9ESDtBQXBERztBQXFETDs7Ozs2QkFDUSxBQUNQO2FBQ0UsS0FBQSxBQUFLLGNBQWMsS0FEckIsQUFDRSxBQUF3QixBQUUzQjs7Ozs7QUFuSCtCLEE7O2tCQUFiLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL1Byb2plY3RzL3RzZC10cmFkaW5nIn0=