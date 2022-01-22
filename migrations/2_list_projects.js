const GetProject = artifacts.require("contracts/GetProject.sol");

module.exports = function(deployer) {
  deployer.deploy(GetProject, "0x974e570a5DbB1921B4db68120972a90dF6B79db3");
};