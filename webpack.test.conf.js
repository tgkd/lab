module.exports = {
    entry: './src/store/modules/data.spec',
    output: {
        path: __dirname,
        filename: 'test-bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    target: 'node',
};
