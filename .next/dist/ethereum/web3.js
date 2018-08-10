"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Web3 = require("web3");
var web3 = void 0;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  var provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/n8gGUtF6aMaBdpLjV4bb");

  web3 = new Web3(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxPQUFPLEFBQVAsQUFBTjtBQUNBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBckQsYUFBa0UsQUFDaEU7U0FBTyxJQUFJLEFBQUosS0FBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0Q7QUFGRCxPQUVPLEFBQ0w7TUFBTSxXQUFXLElBQUksS0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBSUE7O1NBQU8sSUFBSSxBQUFKLEtBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9tZWRpYS9hbmFudC9BbmFudC9Qcm9qZWN0cy9TZWN1cmUtRG9uYXRpb24ifQ==