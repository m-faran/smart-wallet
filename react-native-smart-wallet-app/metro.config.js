const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add aliases for Node core modules
config.resolver.extraNodeModules = require("node-libs-react-native");

module.exports = config;