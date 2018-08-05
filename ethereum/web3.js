const Web3 = require("web3");
let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/n8gGUtF6aMaBdpLjV4bb"
  );

  web3 = new Web3(provider);
}

export default web3;