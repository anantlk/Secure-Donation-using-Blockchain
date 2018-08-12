# Secure Donation

## Description

This is a Ethereum based dApp which can be used for bringing up transparency in the way , the money donated by the people is being used by the respective organanizations.The problems like black money holders showing there transactions in white,using money for smuggling and other illegal purposes can be stopped to a large extent using this dApp.

## Getting Started

This dApp uses Rinkeyby Private Ethereum Network for deploying the Solidity Smart Contract.Follw the instructions below to get the app running on your local machine.

### Usage

#### Configuring Your Browser For Running The dApp
```
1.Add Metamask Extension To the Browser
2.Create an account on Ethereum Network using Metamask Extension
```

#### Running The App

```
1.Open the terminal
2.git clone https://github.com/anantlk/Secure-Donation
3.cd Secure-Donation
4.npm install
5.npm run dev
6.Open the browser on localhost:3000
```
#### For Deploying your Own Copy Of Contract

Run the following Commands:

```
1.cd ethereum
2.node compile.js
3.node deploy.js
4.copy the address of the deployed contract.
5.Replace the address in factory.js file and ADDRESS file.
6.cd ..
7.npm run dev
8.Open the browser on localhost:3000
```
##### Note:
Before using the app Get some free ether in your Rinkeby test network using [this link](https://faucet.rinkeby.io/).
