const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/OrganizationFactory.json');
const env = require('dotenv').config();

const provider = new HDWalletProvider(
    'apple inject basic rough devote group way entire end shuffle pear shrimp',
    'https://rinkeby.infura.io/n8gGUtF6aMaBdpLjV4bb '
);

const web3 = new Web3(provider);

const deploy = async () => {
    let accounts = await web3.eth.getAccounts();
    let balance = await web3.eth.getBalance(accounts[0]);
    console.log(web3.utils.fromWei(balance,'ether'));
    console.log("accounts available:",accounts);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({
        data: compiledFactory.bytecode
    })
    .send({gas: '6000000' , from: accounts[0]});

    result.setProvider(provider);
    console.log("address of the deployed contract:",result.options.address);
}
deploy();