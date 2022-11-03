const hre = require("hardhat")

async function main() {
  const URI = "https://github.com/token/{id}.json"

  const CatERC1155 = await hre.ethers.getContractFactory("CatERC1155")
  const catERC1155 = await CatERC1155.deploy(URI)

  await catERC1155.deployed()

  console.log(`Created ERC1155 Token and deployed to ${catERC1155.address}`)
  console.log(`URI: ${URI}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
