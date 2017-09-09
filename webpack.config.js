var config = {
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader"},//支持stylus
        ],
    }
};
module.exports = config;