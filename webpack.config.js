const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = new require('webpack')

module.exports = () => {

    const mode = process.env.NODE_ENV || 'development'
    const SOURCE_FOLDER = path.resolve(__dirname, 'src')
    const DIST_FOLDER = path.resolve(__dirname, 'dist')

    const COPY = {
        patterns: [
            {
                from: path.join(SOURCE_FOLDER, 'copied'),
                to: DIST_FOLDER
            }
        ]
    }

    const plugins = [];

    plugins.push(new CopyWebpackPlugin(COPY))
    plugins.push(new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    }))

    // new webpack.DefinePlugin({
    //
    // })

    return {
        mode,
        entry: {
            popup: path.resolve(SOURCE_FOLDER, 'popup.js'),
        },
        output: {
            filename: 'js/[name].js',
            path: DIST_FOLDER,
            publicPath: './'
        },
        devtool: 'inline-source-map',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".styl", ".css", ".png", ".jpg", ".icns", ".gif", ".svg", ".woff", ".woff2", ".ttf", ".otf"],
            fallback: {
                "buffer": require.resolve("buffer")
            },
            alias: {
                "buffer": "buffer"
            }

        },
        plugins,

        module: {
            rules: [
                {
                    test: /\.(jsx?)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],

        },
    }
}
