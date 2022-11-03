const hre = require("hardhat")

async function main() {
  const NAME = 'Cat'
  const SYMBOL = 'CAT'
  const DEFAULT_OPERATORS = [process.env.OWNER_ADDRESS]
  const INITIAL_SUPPLY = 10 ** 8
  const OWNER = process.env.OWNER_ADDRESS

  const CatERC777 = await hre.ethers.getContractFactory("CatERC777")
  const catERC777 = await CatERC777.deploy(NAME, SYMBOL, DEFAULT_OPERATORS, INITIAL_SUPPLY, OWNER)

  await catERC777.deployed()

  console.log(`Created ERC777 Token and deployed to ${catERC777.address}`)
  console.log(`NAME: ${NAME}`)
  console.log(`SYMBOL: ${SYMBOL}`)
  console.log(`DEFAULT_OPERATORS: ${DEFAULT_OPERATORS}`)
  console.log(`INITIAL_SUPPLY: ${INITIAL_SUPPLY}`)
  console.log(`OWNER: ${OWNER}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
