const hre = require("hardhat")

async function main() {
  const NAME = 'Cat'
  const SYMBOL = 'CAT'
  const BASE_TOKEN_URI = "https://github.com/token/"

  const CatERC721 = await hre.ethers.getContractFactory("CatERC721")
  const catERC721 = await CatERC721.deploy(NAME, SYMBOL, BASE_TOKEN_URI)

  await catERC721.deployed()

  console.log(`Created ERC721 Token and deployed to ${catERC721.address}`)
  console.log(`NAME: ${NAME}`)
  console.log(`SYMBOL: ${SYMBOL}`)
  console.log(`baseTokenURI: ${BASE_TOKEN_URI}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
