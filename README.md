# erc-tokens
A Hardhat project to create ERC20、ERC777、ERC721、ERC1155 tokens with openzeppelin contracts.

### Installation
```
$ npm install
```

### Configuration
Create a environment file named .env
```
OWNER_ADDRESS=token's owner address
OWNER_PRIVATE_KEY=token's owner private key
ETHERSCAN_API_KEY=Apply for an api key at https://etherscan.io/
INFURA_API_KEY=Apply for an api key at https://infura.io/
INFURA_API_URL=https://goerli.infura.io/v3/{INFURA_API_KEY}
```

### Test
```
$ npx hardhat test
```

### Deploy on Hardhat Network
```
$ npx hardhat run ./scripts/erc20-deploy.js
```

### Deploy on Goerli Network
```
$ npx hardhat run ./scripts/erc20-deploy.js --network goerli
```
