const path = require('path');
const supacentrePwaAliases = require('supacentre-pwa/webpack.moduleAlias');

/**
 * This file contains custom "webpack-like" configuration.
 * "webpack-like" because the `alias` property below isn't actually loaded into webpack, but rather babel module loader
 * The benefit of doing it in a file that "looks like" a webpack configuration is that this file can be loaded into PHPStorm
 * as a webpack configuration, and the alias paths will be auto completed
 */

module.exports = {
    resolve: {
        alias: {
            ...supacentrePwaAliases.resolve.alias,
            '@': path.resolve(__dirname, './src')
        }
    }
};
