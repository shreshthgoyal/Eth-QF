const Funding = artifacts.require("Funding.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Funding", async ([owner, alice, bob, charlie]) => {
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
      assert.equal(project.matchingContributors, 1);
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

  it("should perform clr matching", async() => {
    try{
      await contractInstance.donateToMatchingFund({from:alice, value: 100000});
      await contractInstance.donateToMatchingFund({from:bob, value: 100000});
      await contractInstance.donateToMatchingFund({from:alice, value: 100000});
      const matchingFund = await contractInstance.matchingFund.call();

      await contractInstance.listProject("Project1", "Testing Contract", "https://github.com/shreshthgoyal/QF", "DeFi", {from:alice});
      await contractInstance.listProject("Project2", "Testing Contract 2", "https://github.com/rish78/Essence-Frontend", "Education", {from:bob});

      await contractInstance.contribute(0, {from: bob, value:10000});
      await contractInstance.contribute(1, {from: alice, value:20000});
      await contractInstance.contribute(0, {from: charlie, value:10000});

      assert.equal(matchingFund, 300000);
      await contractInstance.clrMatching();
      const project1 = await contractInstance.projects(0);
      const project2 = await contractInstance.projects(1);
      console.log(project1.matchingShare.toNumber(), project2.matchingShare.toNumber());
   

      // const logs = await contractInstance.sqrt(200000, {from: bob});
      // console.log(logs.toNumber());

    }catch(err){
      console.error(err);
    }
  })
});
