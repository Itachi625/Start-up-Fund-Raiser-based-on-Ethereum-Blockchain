'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
//will handle when code is executed inside browser
//and metamsk is available
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //typeof to see if variable is undefined
  //We are in the browser ans metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running metamask
  //We are gonna setup our own provider that connects
  //to rinkeby through infura
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/b210254a7712482db5cdf01380579699');
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7QUFDQTtBQUNBO0FBQ0EsSUFBRyxPQUFPLEFBQVAsV0FBZ0IsQUFBaEIsZUFBK0IsT0FBTyxPQUFPLEFBQWQsU0FBcUIsQUFBdkQsYUFBbUUsQUFBRTtBQUNsRTtBQUNBO1NBQU0sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQU4sQUFDRjtBQUhELE9BSUksQUFDRjtBQUNBO0FBQ0E7QUFDQTtNQUFNLFdBQVUsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNkLEFBRGMsQUFBaEIsQUFJQTtTQUFLLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQUwsQUFDRDtBQUNEO2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9pdGFjaGkva2lja3N0YXJ0In0=