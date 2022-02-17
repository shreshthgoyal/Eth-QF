const Funding = artifacts.require("Funding.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Funding", async ([owner, alice, bob]) => {
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await Funding.new({from:owner});
  })
  it("should allow contributions to a project", async () => {
    try{
      await contractInstance.listProject("Project1", "Testing Contract", "https://github.com/shreshthgoyal/QF", "DeFi", {from:alice});


      const {logs} = await contractInstance.contribute(0, {from: bob, value:10000});
      const project = await contractInstance.projects(0);

      assert.equal(project.contributors, 1);
      assert.equal(project.fund, 10000);
      assert.equal(project.matchingContributors, 0);
      // assert.equal(project.matchingContributors, 1);
      // assert.equal(project.rootSum, 100);


    }catch(err){
      assert.equal(err,null,err);
    }
  });

  it("should allow donation to matching fund", async () => {
    try{
      await contractInstance.donateToMatchingFund({from:alice, value: 100});
      await contractInstance.donateToMatchingFund({from:bob, value: 100});
      await contractInstance.donateToMatchingFund({from:alice, value: 100});
      const matchingFund = await contractInstance.matchingFund.call();

      const aliceDonation = await contractInstance.sponsorToDonation(alice);
      const bobDonation = await contractInstance.sponsorToDonation(bob);

      assert.equal(matchingFund, 300);
      assert.equal(aliceDonation, 200);
      assert.equal(bobDonation, 100);
    }catch(err){
      assert.equal(err,null,err);
    }
  })
});
