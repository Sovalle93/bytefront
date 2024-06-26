module.exports = {
    entry: './src/index.jsx',
    output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
},
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
    }
    ]
    }
};
