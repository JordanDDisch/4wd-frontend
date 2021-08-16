const path = require('path');
const {
    graphQL: { getUnionAndInterfaceTypes },
    Utilities: { loadEnvironment }
} = require('@magento/pwa-buildpack');
const baseWebpackConfig = require('../../webpack.config');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const moduleOverridePlugin = require('./../../webpack.moduleOverride');
const componentOverrideMapping = require('./../../componentOverrideMapping');

// Storybook 5.2.8 uses a different signature for webpack config than webpack
// defines in the docs.
// See https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
module.exports = async ({ config: storybookBaseConfig, mode }) => {
    // The .env for running most of this project comes from venia-concept.
    // This is not resilient and will need to change if venia-concept is renamed.
    const projectConfig = loadEnvironment(path.resolve(__dirname, '../'));

    if (projectConfig.error) {
        throw projectConfig.error;
    }

    const unionAndInterfaceTypes = await getUnionAndInterfaceTypes();

    const [webpackConfig] = await baseWebpackConfig(mode);

    storybookBaseConfig.module = webpackConfig.module;
    storybookBaseConfig.resolve = webpackConfig.resolve;

    // Make sure to provide any plugins that UI code may depend on.
    storybookBaseConfig.plugins = [
        ...storybookBaseConfig.plugins,
        new moduleOverridePlugin(componentOverrideMapping),
        new DefinePlugin({
            UNION_AND_INTERFACE_TYPES: JSON.stringify(unionAndInterfaceTypes),
            STORE_NAME: JSON.stringify('Storybook'),
            __GOOGLE_PLACES_API_KEY__: `"${process.env.GOOGLE_PLACES_API_KEY}"`
        }),
        new EnvironmentPlugin(projectConfig.env)
    ];

    return storybookBaseConfig;
};
