const constants = require("../utils/constants");

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy(constants.TIP_CONTRACT, {
        from: deployer,
        args: [],
        log: true,
    });
};
module.exports.tags = [constants.TIP_CONTRACT];