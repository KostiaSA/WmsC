var webpack = require("webpack");


module.exports = {
    entry: "./build/WmsC/workflowServer/workflowServer.js",

    output: {
        filename: "./bundle/workflowServer_bundle.js"
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js"]
    },

    target: 'node',

    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' }
        ],
        query: {
            presets: ["es2015"]
        }
    },

    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
};

module.exports.plugins=[];
module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());