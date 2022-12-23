const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("GLDToken", function () {
  async function deployTokenFixture() {
    const totalSupply = "10000000000000000000000"; // 10000 * 1e18

    const Token = await ethers.getContractFactory("GLDToken");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await Token.deploy(totalSupply);

    await hardhatToken.deployed();

    return { Token, hardhatToken, owner, addr1, addr2, totalSupply };
  }

  describe("Properties", async function () {
    this.beforeEach;

    it("Should have a name", async function () {
      const { hardhatToken } = await loadFixture(deployTokenFixture);
      expect(await hardhatToken.name()).to.equal("Gold");
    });

    it("Should have a symbol", async function () {
      const { hardhatToken } = await loadFixture(deployTokenFixture);
      expect(await hardhatToken.symbol()).to.equal("GLD");
    });

    it("Should have 18 decimals", async function () {
      const { hardhatToken } = await loadFixture(deployTokenFixture);
      expect(await hardhatToken.decimals()).to.equal(18);
    });

    it("Should return the total amount of tokens", async function () {
      const { hardhatToken, totalSupply } = await loadFixture(
        deployTokenFixture
      );
      expect(await hardhatToken.totalSupply()).to.equal(totalSupply);
    });
  });

  describe("Deployment", function () {
    it("Should assign the total supply of tokens to the owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);

      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      const { hardhatToken, addr1, addr2, owner } = await loadFixture(
        deployTokenFixture
      );

      // Transfer 50 tokens from owner to addr1
      await expect(
        hardhatToken.transfer(addr1.address, 50)
      ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

      // Transfer 50 tokens from addr1 to addr2
      await expect(
        hardhatToken.connect(addr1).transfer(addr2.address, 50)
      ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
    });

    it("Should fail if sender doesn’t have enough tokens", async function () {
      const { hardhatToken, addr1, owner } = await loadFixture(
        deployTokenFixture
      );

      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

      expect(await hardhatToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });

    it("Should emit Transfer events", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
        deployTokenFixture
      );

      // Transfer 50 tokens from owner to addr1
      await expect(hardhatToken.transfer(addr1.address, 50))
        .to.emit(hardhatToken, "Transfer")
        .withArgs(owner.address, addr1.address, 50);

      // Transfer 50 tokens from addr1 to addr2
      await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
        .to.emit(hardhatToken, "Transfer")
        .withArgs(addr1.address, addr2.address, 50);
    });
  });
});
