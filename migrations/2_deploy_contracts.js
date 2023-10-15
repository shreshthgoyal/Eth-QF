const Funding = artifacts.require("Funding");

module.exports = function (deployer) {
  deployer.deploy(Funding, "0x00BF4a0694560b09818930d2d711Ff82Ba577f6C");
};
