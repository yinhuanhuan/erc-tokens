const hre = require("hardhat")

async function main() {
  const NAME = 'Cat'
  const SYMBOL = 'CAT'
  const INITIAL_SUPPLY = 10 ** 8
  const OWNER = process.env.OWNER_ADDRESS

  const CatERC20 = await hre.ethers.getContractFactory("CatERC20")
  const catERC20 = await CatERC20.deploy(NAME, SYMBOL, INITIAL_SUPPLY, OWNER)

  await catERC20.deployed()

  console.log(`Created ERC20 Token and deployed to ${catERC20.address}`)
  console.log(`NAME: ${NAME}`)
  console.log(`SYMBOL: ${SYMBOL}`)
  console.log(`INITIAL_SUPPLY: ${INITIAL_SUPPLY}`)
  console.log(`OWNER: ${OWNER}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
