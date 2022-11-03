const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers")
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs")
const { expect } = require("chai")

describe("CatERC777", function () {
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners()

    const NAME = 'Cat'
    const SYMBOL = 'CAT'
    const DEFAULT_OPERATORS = [owner.address]
    const INITIAL_SUPPLY = 10 ** 8
    const OWNER = owner.address

    const CatERC777 = await hre.ethers.getContractFactory("CatERC777")
    const catERC777 = await CatERC777.deploy(NAME, SYMBOL, DEFAULT_OPERATORS, INITIAL_SUPPLY, OWNER)

    return { catERC777, owner, otherAccount }
  }

  describe("Deployment", function () {
    it("Should set the total supply balance of owner", async function () {
      const { catERC777, owner } = await loadFixture(deployFixture)

      const balanceOfOwner = await catERC777.balanceOf(owner.address)
      const totalSupply = await catERC777.totalSupply()
      expect(balanceOfOwner).to.equal(totalSupply)
    })
  })
})
