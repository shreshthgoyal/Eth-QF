const Funding = artifacts.require("Funding");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Funding", function (/* accounts */) {
  it("should assert true", async function () {
    await Funding.deployed();
    return assert.isTrue(true);
  });
});
