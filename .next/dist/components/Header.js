'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/itachi/kickstart/components/Header.js';

//className in <a> will use semantic ui gives styling
exports.default = function () {
   return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
         fileName: _jsxFileName,
         lineNumber: 7
      }
   }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
         fileName: _jsxFileName,
         lineNumber: 8
      }
   }, _react2.default.createElement('a', { className: 'item', __source: {
         fileName: _jsxFileName,
         lineNumber: 9
      }
   }, 'CrowdCoin')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
         fileName: _jsxFileName,
         lineNumber: 11
      }
   }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
         fileName: _jsxFileName,
         lineNumber: 12
      }
   }, _react2.default.createElement('a', { className: 'item', __source: {
         fileName: _jsxFileName,
         lineNumber: 13
      }
   }, 'Campaigns')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
         fileName: _jsxFileName,
         lineNumber: 15
      }
   }, _react2.default.createElement('a', { className: 'item', __source: {
         fileName: _jsxFileName,
         lineNumber: 16
      }
   }, '+'))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFROztBQUNSLEFBQVEsQUFBVzs7Ozs7O0FBQ25CLEFBQ0E7a0JBQWMsWUFBSSxBQUNoQjswQkFDRSxBQUFDLHVDQUFLLE9BQU8sRUFBQyxXQUFkLEFBQWEsQUFBVzttQkFBeEI7cUJBQUEsQUFDSTtBQURKO0lBQUEsa0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7bUJBQVo7cUJBQUEsQUFDRztBQURIO3NCQUNHLGNBQUEsT0FBRyxXQUFILEFBQWE7bUJBQWI7cUJBQUE7QUFBQTtNQUZQLEFBQ0ksQUFDRyxBQUVILCtCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7bUJBQXBCO3FCQUFBLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTttQkFBWjtxQkFBQSxBQUNHO0FBREg7c0JBQ0csY0FBQSxPQUFHLFdBQUgsQUFBYTttQkFBYjtxQkFBQTtBQUFBO01BRkgsQUFDQSxBQUNHLEFBRUgsK0JBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7bUJBQVo7cUJBQUEsQUFDRztBQURIO3NCQUNHLGNBQUEsT0FBRyxXQUFILEFBQWE7bUJBQWI7cUJBQUE7QUFBQTtNQVZULEFBQ0UsQUFJSSxBQUlBLEFBQ0csQUFLVjtBQWhCRCIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvaXRhY2hpL2tpY2tzdGFydCJ9