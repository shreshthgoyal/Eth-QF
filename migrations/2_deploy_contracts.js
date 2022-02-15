const Funding = artifacts.require("Funding");

module.exports = function (deployer) {
  deployer.deploy(Funding, "0x8Fd01f26fB938cE92704Cc931cAA907A42A6A90b");
};
