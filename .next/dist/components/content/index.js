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

var _rcProgress = require('rc-progress');

var _img = require('../img');

var _img2 = _interopRequireDefault(_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mrhorse/Desktop/Projects/tsd-trading/components/content/index.js';


var Content = function (_Component) {
  (0, _inherits3.default)(Content, _Component);

  function Content() {
    (0, _classCallCheck3.default)(this, Content);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).call(this));

    _this.state = {
      percent: 90,
      color: '#3FC7FA'
    };
    return _this;
  }

  (0, _createClass3.default)(Content, [{
    key: 'changeState',
    value: function changeState() {
      var colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
      this.setState({
        percent: parseInt(Math.random() * 100, 10),
        color: colorMap[parseInt(Math.random() * 3, 10)]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3901621306' + ' ' + 'content-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_reactGridSystem.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_reactGridSystem.Col, { lg: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3901621306',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_reactGridSystem.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_reactGridSystem.Col, { lg: 4, md: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3901621306' + ' ' + 'cirle-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3901621306' + ' ' + 'circle-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_rcProgress.Circle, { percent: this.state.percent - 10, strokeWidth: '6', strokeColor: this.state.color, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }))), _react2.default.createElement('p', {
        className: 'jsx-3901621306',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.state.percent, '% Quality')), _react2.default.createElement(_reactGridSystem.Col, { lg: 4, md: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3901621306' + ' ' + 'cirle-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3901621306' + ' ' + 'circle-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_rcProgress.Circle, { percent: this.state.percent - 10, strokeWidth: '6', strokeColor: this.state.color, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }))), _react2.default.createElement('p', {
        className: 'jsx-3901621306',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.state.percent, '% Durability')), _react2.default.createElement(_reactGridSystem.Col, { lg: 4, md: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3901621306' + ' ' + 'cirle-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3901621306' + ' ' + 'circle-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_rcProgress.Circle, { percent: this.state.percent - 10, strokeWidth: '6', strokeColor: this.state.color, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))), _react2.default.createElement('p', {
        className: 'jsx-3901621306',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.state.percent, '% Satisfaction')), _react2.default.createElement('p', {
        className: 'jsx-3901621306',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('button', { onClick: this.changeState.bind(this), className: 'jsx-3901621306',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Change Hi'))))), _react2.default.createElement(_reactGridSystem.Col, { lg: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_reactGridSystem.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_img2.default, { img: 'https://thumbs.dreamstime.com/b/textura-del-cemento-6536569.jpg', text: 'Cement', alt: 'cement', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_img2.default, { img: 'https://www.harpdesignco.com/wp-content/uploads/2017/04/floor-1256804_1920-800x423.jpg', text: 'Wood', alt: 'wood', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_img2.default, { img: 'http://www.metromix.com.au/files/3613/0155/0120/Screen_shot_2011-03-31_at_4.41.34_PM.png', text: 'Gravel', alt: 'gravel', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_img2.default, { img: 'http://www.guoguiyan.com/data/out/4/68906191-aluminum-wallpapers.png', text: 'Aluminium', alt: 'Aluminium', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_img2.default, { img: 'http://estag.fimagenes.com/img/3/3/0/F/L/30FL_900.jpg', text: 'Block', alt: 'block', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement(_img2.default, { img: 'https://image.freepik.com/foto-gratis/textura-de-playa-de-arena_1232-454.jpg', text: 'Sand', alt: 'sand', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: '3901621306',
        css: 'p.jsx-3901621306{text-align:center;}.cirle-wrapper.jsx-3901621306{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.circle-container.jsx-3901621306{width:100px;height:100px;}.content-container.jsx-3901621306{height:100vh;padding-top:30px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRW9CLEFBRytCLEFBR1IsQUFNRSxBQUlBLFdBVEMsQ0FNQSxDQUlHLEtBYmxCLE9BVUEsS0FJQSx1REFWcUIsNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVudC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tcmhvcnNlL0Rlc2t0b3AvUHJvamVjdHMvdHNkLXRyYWRpbmciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xuaW1wb3J0IHsgTGluZSwgQ2lyY2xlIH0gZnJvbSAncmMtcHJvZ3Jlc3MnO1xuaW1wb3J0IEltZyBmcm9tICcuLi9pbWcnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwZXJjZW50OiA5MCxcbiAgICAgIGNvbG9yOiAnIzNGQzdGQScsXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoKSB7XG4gICAgY29uc3QgY29sb3JNYXAgPSBbJyMzRkM3RkEnLCAnIzg1RDI2MicsICcjRkU4QzZBJ107XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwZXJjZW50OiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwLCAxMCksXG4gICAgICBjb2xvcjogY29sb3JNYXBbcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMsIDEwKV0sXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIGxnPXs2fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmxlLXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lyY2xlLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgPENpcmNsZSBwZXJjZW50PXt0aGlzLnN0YXRlLnBlcmNlbnQgLSAxMH0gc3Ryb2tlV2lkdGg9XCI2XCIgc3Ryb2tlQ29sb3I9e3RoaXMuc3RhdGUuY29sb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5wZXJjZW50fSUgUXVhbGl0eTwvcD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lybGUtd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlIHBlcmNlbnQ9e3RoaXMuc3RhdGUucGVyY2VudCAtIDEwfSBzdHJva2VXaWR0aD1cIjZcIiBzdHJva2VDb2xvcj17dGhpcy5zdGF0ZS5jb2xvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnBlcmNlbnR9JSBEdXJhYmlsaXR5PC9wPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJsZS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZS1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGUgcGVyY2VudD17dGhpcy5zdGF0ZS5wZXJjZW50IC0gMTB9IHN0cm9rZVdpZHRoPVwiNlwiIHN0cm9rZUNvbG9yPXt0aGlzLnN0YXRlLmNvbG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUucGVyY2VudH0lIFNhdGlzZmFjdGlvbjwvcD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jaGFuZ2VTdGF0ZS5iaW5kKHRoaXMpfT5DaGFuZ2UgSGk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz17Nn0+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8SW1nIGltZz0naHR0cHM6Ly90aHVtYnMuZHJlYW1zdGltZS5jb20vYi90ZXh0dXJhLWRlbC1jZW1lbnRvLTY1MzY1NjkuanBnJyB0ZXh0PSdDZW1lbnQnIGFsdD0nY2VtZW50JyAvPlxuICAgICAgICAgICAgICA8SW1nIGltZz0naHR0cHM6Ly93d3cuaGFycGRlc2lnbmNvLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNC9mbG9vci0xMjU2ODA0XzE5MjAtODAweDQyMy5qcGcnIHRleHQ9J1dvb2QnIGFsdD0nd29vZCcvPlxuICAgICAgICAgICAgICA8SW1nIGltZz0naHR0cDovL3d3dy5tZXRyb21peC5jb20uYXUvZmlsZXMvMzYxMy8wMTU1LzAxMjAvU2NyZWVuX3Nob3RfMjAxMS0wMy0zMV9hdF80LjQxLjM0X1BNLnBuZycgdGV4dD0gJ0dyYXZlbCcgYWx0PSdncmF2ZWwnLz5cbiAgICAgICAgICAgICAgPEltZyBpbWc9J2h0dHA6Ly93d3cuZ3VvZ3VpeWFuLmNvbS9kYXRhL291dC80LzY4OTA2MTkxLWFsdW1pbnVtLXdhbGxwYXBlcnMucG5nJyB0ZXh0PSdBbHVtaW5pdW0nIGFsdD0nQWx1bWluaXVtJy8+XG4gICAgICAgICAgICAgIDxJbWcgaW1nPSdodHRwOi8vZXN0YWcuZmltYWdlbmVzLmNvbS9pbWcvMy8zLzAvRi9MLzMwRkxfOTAwLmpwZycgdGV4dD0nQmxvY2snIGFsdD0nYmxvY2snLz5cbiAgICAgICAgICAgICAgPEltZyBpbWc9J2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZm90by1ncmF0aXMvdGV4dHVyYS1kZS1wbGF5YS1kZS1hcmVuYV8xMjMyLTQ1NC5qcGcnIHRleHQ9J1NhbmQnIGFsdD0nc2FuZCcvPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaXJsZS13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2lyY2xlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6MzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/content/index.js */'
      }));
    }
  }]);

  return Content;
}(_react.Component);

exports.default = Content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsIkNvbCIsIkxpbmUiLCJDaXJjbGUiLCJJbWciLCJDb250ZW50Iiwic3RhdGUiLCJwZXJjZW50IiwiY29sb3IiLCJjb2xvck1hcCIsInNldFN0YXRlIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiY2hhbmdlU3RhdGUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFLOztBQUNkLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVM7Ozs7Ozs7OztJQUNLLEE7bUNBQ25COztxQkFBYzt3Q0FBQTs7a0lBRVo7O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDthQUpVLEFBRVosQUFBYSxBQUVKO0FBRkksQUFDWDtXQUdIOzs7OztrQ0FFYSxBQUNaO1VBQU0sV0FBVyxDQUFBLEFBQUMsV0FBRCxBQUFZLFdBQTdCLEFBQWlCLEFBQXVCLEFBQ3hDO1dBQUEsQUFBSztpQkFDTSxTQUFTLEtBQUEsQUFBSyxXQUFkLEFBQXlCLEtBRHRCLEFBQ0gsQUFBOEIsQUFDdkM7ZUFBTyxTQUFTLFNBQVMsS0FBQSxBQUFLLFdBQWQsQUFBeUIsR0FGM0MsQUFBYyxBQUVMLEFBQVMsQUFBNEIsQUFFL0M7QUFKZSxBQUNaOzs7OzZCQUtLLEFBQ1A7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsc0NBQUksSUFBTCxBQUFTO29CQUFUO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHNDQUFJLElBQUwsQUFBUyxHQUFHLElBQVosQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxvQ0FBTyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBNUIsQUFBc0MsSUFBSSxhQUExQyxBQUFzRCxLQUFJLGFBQWEsS0FBQSxBQUFLLE1BQTVFLEFBQWtGO29CQUFsRjtzQkFITixBQUNFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7NEJBR0osY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsY0FBSSxBQUFLLE1BQVQsQUFBZSxTQVBuQixBQUNFLEFBTUUsQUFFRiwrQkFBQSxBQUFDLHNDQUFJLElBQUwsQUFBUyxHQUFHLElBQVosQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxvQ0FBTyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBNUIsQUFBc0MsSUFBSSxhQUExQyxBQUFzRCxLQUFJLGFBQWEsS0FBQSxBQUFLLE1BQTVFLEFBQWtGO29CQUFsRjtzQkFITixBQUNFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7NEJBR0osY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsY0FBSSxBQUFLLE1BQVQsQUFBZSxTQWZuQixBQVNFLEFBTUUsQUFFRixrQ0FBQSxBQUFDLHNDQUFJLElBQUwsQUFBUyxHQUFHLElBQVosQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxvQ0FBTyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBNUIsQUFBc0MsSUFBSSxhQUExQyxBQUFzRCxLQUFJLGFBQWEsS0FBQSxBQUFLLE1BQTVFLEFBQWtGO29CQUFsRjtzQkFITixBQUNFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7NEJBR0osY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsY0FBSSxBQUFLLE1BQVQsQUFBZSxTQXZCbkIsQUFpQkUsQUFNRSxBQUVGLG9DQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQWxDLEFBQWlCLEFBQXNCLGtCQUF2Qzs7b0JBQUE7c0JBQUE7QUFBQTtTQTdCVixBQUNFLEFBQ0UsQUFDRSxBQXlCRSxBQUNFLEFBS1Isa0NBQUEsQUFBQyxzQ0FBSSxJQUFMLEFBQVM7b0JBQVQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsK0JBQUksS0FBTCxBQUFTLG1FQUFrRSxNQUEzRSxBQUFnRixVQUFTLEtBQXpGLEFBQTZGO29CQUE3RjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLCtCQUFJLEtBQUwsQUFBUywwRkFBeUYsTUFBbEcsQUFBdUcsUUFBTyxLQUE5RyxBQUFrSDtvQkFBbEg7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywrQkFBSSxLQUFMLEFBQVMsNEZBQTJGLE1BQXBHLEFBQTBHLFVBQVMsS0FBbkgsQUFBdUg7b0JBQXZIO3NCQUhGLEFBR0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsK0JBQUksS0FBTCxBQUFTLHdFQUF1RSxNQUFoRixBQUFxRixhQUFZLEtBQWpHLEFBQXFHO29CQUFyRztzQkFKRixBQUlFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLCtCQUFJLEtBQUwsQUFBUyx5REFBd0QsTUFBakUsQUFBc0UsU0FBUSxLQUE5RSxBQUFrRjtvQkFBbEY7c0JBTEYsQUFLRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywrQkFBSSxLQUFMLEFBQVMsZ0ZBQStFLE1BQXhGLEFBQTZGLFFBQU8sS0FBcEcsQUFBd0c7b0JBQXhHO3NCQTFDUixBQUNFLEFBa0NFLEFBQ0UsQUFNRTtBQUFBOztpQkExQ1I7YUFERixBQUNFLEFBbUVIO0FBbkVHOzs7OztBQW5CK0IsQTs7a0JBQWhCLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL1Byb2plY3RzL3RzZC10cmFkaW5nIn0=