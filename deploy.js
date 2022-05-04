const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    "crime upon pet number coast forest silly enhance snake believe mind grief",
    'https://rinkeby.infura.io/v3/07a29ee61f8c456a8eae14bd2d9556b0'
)
const web3 = new Web3(provider)
