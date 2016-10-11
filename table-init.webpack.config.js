var webpack = require("webpack");


module.exports = {
//    entry: "./buhta_modules/components/index.js",
    entry: "./build/WmsC/scripts/InitTables.js",
    output: {
        filename: "./build/InitTables_bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    //devtool: "inline-source-map",

    // resolve: {
    //     // Add '.ts' and '.tsx' as resolvable extensions.
    //     extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    // },
    //
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

     // plugins: [
     //     new webpack.optimize.UglifyJsPlugin({
     //         sourceMap: false,
     //         mangle: false
     //     })
     // ],

    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
    // When importing a module whose path matches one of the following,  just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     "onsenui": "ons",
    //     "react-onsenui": "Ons",
    //     //"lodash": "_",
    //     //"jquery": "$",
    //     //"socket.io-client": "io",
    //     //"moment": "moment",
    // },
};

module.exports.plugins=[];
module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());