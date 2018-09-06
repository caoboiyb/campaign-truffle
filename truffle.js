/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require("truffle-hdwallet-provider");
MNENOMIC =
  "mercy render bargain voice orbit leave blood kick timber oppose girl term";
INFURA_API_KEY = "98d974a28bdd4cad9f75c1e3aa450518";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 470000
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          MNENOMIC,
          "https://ropsten.infura.io/v3/" + INFURA_API_KEY
        ),
      network_id: 3,
      gas: 4612388,
      gasPrice: 100
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          MNENOMIC,
          "https://kovan.infura.io/v3/" + INFURA_API_KEY
        ),
      network_id: 42,
      gas: 470000,
      gasPrice: 21
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          MNENOMIC,
          "https://rinkeby.infura.io/v3/" + INFURA_API_KEY
        ),
      network_id: 4,
      gas: 470000,
      gasPrice: 21
    },
    // main ethereum network(mainnet)
    main: {
      provider: () =>
        new HDWalletProvider(
          MNENOMIC,
          "https://mainnet.infura.io/v3/" + INFURA_API_KEY
        ),
      network_id: 1,
      gas: 470000,
      gasPrice: 21
    }
  }
};
