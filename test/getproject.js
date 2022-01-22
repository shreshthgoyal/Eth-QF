const GetProject = artifacts.require("contracts/GetProject.sol");

contract('GetProject', async ([owner, alice]) =>  {
    let contractInstance;

  beforeEach(async () => {
    contractInstance = await GetProject.new({from:owner});
  })

  it("should list a new project", async () => {
      try{
      const {logs} = await contractInstance.listProject("Project1", "Testing Contract", "https://github.com/shreshthgoyal/QF", "DeFi", {from:alice});
      const project = await contractInstance.projects(0);
      
      assert.equal(project.projectOwner, alice)
      assert.equal(project.title, "Project1")
      assert.equal(project.pitch, "Testing Contract")
      assert.equal(project.githubLink, "https://github.com/shreshthgoyal/")
      assert.equal(project.state, 1)
      assert.equal(project.fund, 0)
    }
    catch(err)
    {
      assert.equal(err,null,err);
    }
  })

});