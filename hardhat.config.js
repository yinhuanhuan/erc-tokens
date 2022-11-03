require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
    },
    goerli: {
      url: process.env.INFURA_API_URL,
      accounts: [
        process.env.OWNER_PRIVATE_KEY,
      ],
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },

  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

  mocha: {
    timeout: 40000,
  },
}
