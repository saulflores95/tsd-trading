'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mrhorse/Desktop/Projects/tsd-trading/components/img/index.js';


var Img = function Img(props) {
  return _react2.default.createElement(_reactGridSystem.Col, { lg: 6, md: 6, sm: 12, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, console.log(props), _react2.default.createElement('div', {
    className: 'jsx-1250480066' + ' ' + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('img', { src: props.img, alt: 'Avatar', className: 'jsx-1250480066' + ' ' + 'image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('div', {
    className: 'jsx-1250480066' + ' ' + 'overlay',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1250480066' + ' ' + 'text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.text))), _react2.default.createElement(_style2.default, {
    styleId: '1250480066',
    css: '.container.jsx-1250480066{position:relative;height:300px;margin-top:10px;}.image.jsx-1250480066{display:block;width:100%;height:100%;}.overlay.jsx-1250480066{position:absolute;bottom:100%;left:0;right:0;background-color:black;overflow:hidden;width:100%;height:0;-webkit-transition:.5s ease;transition:.5s ease;opacity:0.5;}.container.jsx-1250480066:hover .overlay.jsx-1250480066{bottom:0;height:100%;}.text.jsx-1250480066{white-space:nowrap;color:white;font-size:20px;position:absolute;overflow:hidden;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1nL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUcyQixBQU1KLEFBTUksQUFjVCxBQUtVLFNBSlAsS0FwQkQsSUFOQyxBQVlBLENBbUJBLEVBSmQsSUFwQmMsS0FNTCxDQVpRLEFBK0JBLE1BeEJqQixBQU1VLFFBQ2UsQ0FrQkwsQ0EvQnBCLGlCQWdDa0IsSUFsQkEsWUFtQlIsSUFsQkcsSUFtQkYsT0FsQkQsRUFtQndCLE9BbEJaLGdEQUNSLFlBRWQsc0NBZ0JzQyxtQ0FDdEMiLCJmaWxlIjoiY29tcG9uZW50cy9pbWcvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL1Byb2plY3RzL3RzZC10cmFkaW5nIiwic291cmNlc0NvbnRlbnQiOlsiICBpbXBvcnQgeyBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSdcblxuY29uc3QgSW1nID0gKHByb3BzKSA9PiAoXG4gIDxDb2wgbGc9ezZ9IG1kPXs2fSBzbT17MTJ9PlxuICB7Y29uc29sZS5sb2cocHJvcHMpfVxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PSdBdmF0YXInIGNsYXNzTmFtZT0naW1hZ2UnIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmxheSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz57cHJvcHMudGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDozMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgfVxuXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLm92ZXJsYXkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OjA7XG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0NvbD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW1nXG4iXX0= */\n/*@ sourceURL=components/img/index.js */'
  }));
};

exports.default = Img;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1nL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbCIsIkltZyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImltZyIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUUsQUFBUzs7Ozs7OztBQUVYLElBQU0sTUFBTSxTQUFOLEFBQU0sSUFBQSxBQUFDLE9BQUQ7eUJBQ1YsQUFBQyxzQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCLEdBQUcsSUFBbkIsQUFBdUI7Z0JBQXZCO2tCQUFBLEFBQ0M7QUFERDtHQUFBLFVBQ0MsQUFBUSxJQURULEFBQ0MsQUFBWSxBQUNYLHdCQUFBLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEsNENBQ08sS0FBSyxNQUFWLEFBQWdCLEtBQUssS0FBckIsQUFBeUIsOENBQXpCLEFBQTRDOztnQkFBNUM7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQXVCO0FBQXZCO0FBQUEsV0FMTixBQUVFLEFBRUUsQUFDRSxBQUE2QjthQUxuQztTQURVLEFBQ1Y7QUFBQTtBQURGLEFBd0RBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21yaG9yc2UvRGVza3RvcC9Qcm9qZWN0cy90c2QtdHJhZGluZyJ9