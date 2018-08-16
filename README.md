# Secure Donation

## Description

This is a Ethereum based dApp which can be used for bringing up transparency in the way , the money donated by the people is being used by the respective organanizations.The problems like black money holders showing there transactions in white,using money for smuggling and other illegal purposes can be stopped to a large extent using this dApp.For detailed working [visit this link](https://dev.to/anantlk/blockcahin-based-dapp-for-donation-system-kbe).

## Getting Started

This dApp uses Rinkeyby Private Ethereum Network for deploying the Solidity Smart Contract.Follow the instructions below to get the app running on your local machine.

### Usage

#### Configuring The Browser For Running The dApp

1.Add [Metamask Extension](https://metamask.io) to the browser.

2.Create an account on Ethereum Network using Metamask Extension.


#### Running The App

Open the terminal and paste the follwing set of commands:

```
git clone https://github.com/anantlk/Secure-Donation
cd Secure-Donation
npm install
npm run dev
```

Open the browser on localhost:3000

#### Deploying your Own Copy Of Contract

Run the following Commands:

```
cd ethereum
node compile.js
node deploy.js
```

Copy the address of the deployed contract and replace the address in factory.js file and ADDRESS file.

Run the following commands:
```
cd ..
npm run dev
```
Open the browser on localhost:3000

#### Note:
Before using the app get some free ether in your Rinkeby Account using [this link](https://faucet.rinkeby.io/).
