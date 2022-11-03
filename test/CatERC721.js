const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers")
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs")
const { expect } = require("chai")

describe("CatERC721", function () {
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners()

    const NAME = 'Cat'
    const SYMBOL = 'CAT'
    const BASE_TOKEN_URI = "https://github.com/token/"

    const CatERC721 = await hre.ethers.getContractFactory("CatERC721")
    const catERC721 = await CatERC721.deploy(NAME, SYMBOL, BASE_TOKEN_URI)

    return { catERC721, owner, otherAccount }
  }

  describe("Deployment", function () {
    it("Should set the DEFAULT_ADMIN_ROLE of owner", async function () {
      const { catERC721, owner } = await loadFixture(deployFixture)

      const adminRole = '0x0000000000000000000000000000000000000000000000000000000000000000'
      const hasAdminRole = await catERC721.hasRole(adminRole, owner.address)
      expect(hasAdminRole).to.equal(true)
    })

    it("Should set the MINTER_ROLE of owner", async function () {
      const { catERC721, owner } = await loadFixture(deployFixture)

      const minterRole = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE"))
      const hasMinterRole = await catERC721.hasRole(minterRole, owner.address)
      expect(hasMinterRole).to.equal(true)
    })

    it("Should set the PAUSER_ROLE of owner", async function () {
      const { catERC721, owner } = await loadFixture(deployFixture)

      const pauserRole = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PAUSER_ROLE"))
      const hasPauserRoleRole = await catERC721.hasRole(pauserRole, owner.address)
      expect(hasPauserRoleRole).to.equal(true)
    })
  })
})
