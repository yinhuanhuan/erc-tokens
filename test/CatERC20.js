const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers")
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs")
const { expect } = require("chai")

describe("CatERC20", function () {
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners()

    const NAME = 'Cat'
    const SYMBOL = 'CAT'
    const INITIAL_SUPPLY = 10 ** 8
    const OWNER = owner.address

    const CatERC20 = await hre.ethers.getContractFactory("CatERC20")
    const catERC20 = await CatERC20.deploy(NAME, SYMBOL, INITIAL_SUPPLY, OWNER)

    return { catERC20, owner, otherAccount }
  }

  describe("Deployment", function () {
    it("Should set the total supply balance of owner", async function () {
      const { catERC20, owner } = await loadFixture(deployFixture)

      const balanceOfOwner = await catERC20.balanceOf(owner.address)
      const totalSupply = await catERC20.totalSupply()
      expect(balanceOfOwner).to.equal(totalSupply)
    })
  })
})
