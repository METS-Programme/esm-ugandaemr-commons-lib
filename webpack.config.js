const config = (module.exports = require("openmrs/default-webpack-config"));
config.scriptRuleConfig.exclude =
    path.sep == "/" ?
    /(node_modules[^\/@openmrs\/esm\-patient\-common\-lib])/ :
    /(node_modules[^\\@openmrs\/esm\-patient\-common\-lib])/;
// Temporary fix to resolve webpack issues with imports from the commons library
config.overrides.resolve = {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".scss"]
};
module.exports = config;
