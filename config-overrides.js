const { override, addBabelPlugins, addWebpackAlias } = require('customize-cra');
const path = require('path');


module.exports = override(
    addBabelPlugins(
        ["@babel/plugin-proposal-optional-chaining"],
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ),
    addWebpackAlias({
        "assets": path.resolve('./src', 'assets'),
        "features": path.resolve('./src', 'features'),
        "core": path.resolve('./src', 'core'),
        "ui": path.resolve('./src', 'ui'),
        "pages": path.resolve('./src', 'pages'),
        "lib": path.resolve('./src', 'lib'),
    })
);
