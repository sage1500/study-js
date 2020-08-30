const path = require('path');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        'hoge': './src/hoge.js',
        'hoge2': './src/hoge2.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')

        // ※publicPath は url-loader や file-loader のURLの出力パスに影響するので不用意に設定しない方がよい
        // publicPath: '/abc'
    },
    // optimization: {
    //     // 圧縮
    //     minimizer: [
    //         // JavaScript用
    //         new TerserPlugin({}),
    //         // CSS用
    //         new OptimizeCSSAssetsPlugin({})
    //     ],
    // },
    module: {
        rules: [
            // ESLint のローダー
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            //自動修正をする場合は以下のコメントを外す
                            //fix: true,
                        },
                    },
                ],
            },
            // CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // 画像
            {
                test: /\.(gif|png|jpe?g|svg|eot|wof|woff|woff2|ttf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4 * 1024,
                            name: './images/[name].[ext]'
                        }
                    }
                ]
            },
            // Babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    }

    // Watch
    // ,
    // watch: true,
    // watchOptions: {
    //     ignored: /node_modules/
    // }

    // Devtool
    // ,
    // devtool: 'source-map'
};