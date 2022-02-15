let web3 = window.web3;
const Web3 = require('web3');

const {address, abi} = require('./config');

export const App = {
    load : async () => {
      console.log("load");
        await App.loadWeb3();
        await App.loadAccount();
        await App.loadContract();
    },

    loadWeb3: async () => {
        if (typeof web3 !== 'undefined') {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(web3.currentProvider)
        } else {
          window.alert('Please connect to Metamask.')
        }
        // Modern dapp browsers...
        if (window.ethereum) {
          const {ethereum} = window;
          window.web3 = new Web3(ethereum)
          try {
            // Request account access if needed
            await ethereum.enable()
          } catch (error) {
            // User denied account access...
          }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
          App.web3Provider = web3.currentProvider
          window.web3 = new Web3(web3.currentProvider)
        }
        // Non-dapp browsers...
        else {
          console.log(
            'Non-Ethereum browser detected. You should consider trying MetaMask!',
          )
        }
      },
      loadAccount: async () => {
        App.account = (await web3.eth.getAccounts())[0];
        console.log(`Account : ${App.account}`);
      },

      loadContract: async () => {
        App.contract = new web3.eth.Contract(abi, address);
      },

}

document.addEventListener("DOMContentLoaded", function() {
  // code...
  App.load();
});