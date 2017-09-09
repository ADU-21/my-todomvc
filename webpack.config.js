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
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader"},//支持stylus
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ],
    }
};
module.exports = config;