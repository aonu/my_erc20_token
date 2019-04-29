var AONUToken = artifacts.require("./AONUToken.sol");
var AONUTokenSale = artifacts.require("./AONUTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(AONUToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(AONUTokenSale, AONUToken.address, tokenPrice);
  });
};
