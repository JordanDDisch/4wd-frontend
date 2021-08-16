const path = require('path');
const supacentreWebpack = require('supacentre-pwa/webpack.config');

const {
    configureWebpack,
    graphQL: { getMediaURL, getUnionAndInterfaceTypes }
} = require('@magento/pwa-buildpack');
const { DefinePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const moduleOverridePlugin = require('supacentre-pwa/webpack.moduleOverride');
const webpackModuleAlias = require('./webpack.moduleAlias');
const staticAssetsCopyPlugin = require('supacentre-pwa/webpack.staticAssetsCopy');
const cleanBuildFolderPlugin = require('supacentre-pwa/webpack.cleanBuildFolder');
const componentOverrideMapping = require('./componentOverrideMapping');

module.exports = async env => {
    global.MAGENTO_MEDIA_BACKEND_URL = process.env.MAGENTO_BACKEND_MEDIA_URL;

    const unionAndInterfaceTypes = await getUnionAndInterfaceTypes();

    const config = await configureWebpack({
        context: __dirname,
        vendor: [
            '@apollo/react-hooks',
            'apollo-cache-inmemory',
            'apollo-cache-persist',
            'apollo-client',
            'apollo-link-context',
            'apollo-link-http',
            'informed',
            'react',
            'react-dom',
            'react-feather',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-actions',
            'redux-thunk'
        ],
        special: {
            'react-feather': {
                esModules: true
            },
            '@magento/peregrine': {
                esModules: true,
                cssModules: true
            },
            '@magento/venia-ui': {
                cssModules: true,
                esModules: true,
                graphqlQueries: true,
                rootComponents: true,
                upward: true
            },
            'supacentre-pwa': {
                esModules: true,
                graphqlQueries: true,
                cssModules: true
            },
            'supacentre-react': {
                esModules: true
            },
            '@aligent/utils': {
                esModules: true
            }
        },
        env
    });

    config.module.rules = config.module.rules.map(rule => {
        const regex = new RegExp(rule.test);
        if (!regex.test('file.graphql')) {
            return rule;
        }

        return {
            ...rule,
            include: [
                ...rule.include,
                path.resolve('node_modules/supacentre-pwa/src')
            ]
        };
    });

    /**
     * configureWebpack() returns a regular Webpack configuration object.
     * You can customize the build by mutating the object here, as in
     * this example. Since it's a regular Webpack configuration, the object
     * supports the `module.noParse` option in Webpack, documented here:
     * https://webpack.js.org/configuration/module/#modulenoparse
     */
    config.module.noParse = [/braintree\-web\-drop\-in/];
    config.plugins = [
        ...config.plugins,
        new DefinePlugin({
            /**
             * Make sure to add the same constants to
             * the globals object in jest.config.js.
             */
            UNION_AND_INTERFACE_TYPES: JSON.stringify(unionAndInterfaceTypes),
            STORE_NAME: JSON.stringify('Adventure Kings'),
            TITLE_NAME: JSON.stringify(' , Outdoor Products - Australia')
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ];

    config.plugins.push(new moduleOverridePlugin(componentOverrideMapping));

    config.plugins.push(staticAssetsCopyPlugin);
    config.plugins.push(cleanBuildFolderPlugin);

    config.plugins.push(
        new DefinePlugin({
            __GOOGLE_PLACES_API_KEY__: `"${process.env.GOOGLE_PLACES_API_KEY}"`,
            __MAGENTO_BE_URL__: `"${process.env.MAGENTO_BACKEND_URL}"`,
            __MAGENTO_MEDIA_URL__: `"${process.env.MAGENTO_BACKEND_URL}"`,
            __STORE_CODE__: `"${process.env.STORE_CODE}"`,
            __CATEGORY_ID__: `"${process.env.CATEGORY_ID}"`
        })
    );

    config.module.rules.push({
        test: /\.scss$/,
        loader: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    localIdentName: '[local]-[hash:base64:3]',
                    modules: true,
                    sourceMap: env.mode !== 'production'
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: env.mode !== 'production'
                }
            }
        ]
    });

    config.module.rules.push({
        test: /\.worker\.js$/,
        loader: ['worker-loader']
    });

    // This config is imported here to help with IDE code completion. Babel is actually handling the module aliasing in babel.config.js
    config.resolve.alias = {
        ...config.resolve.alias,
        ...webpackModuleAlias.resolve.alias
    };

    return config;
};
