const path = require('path');

module.exports = {
    entry: {
        'hoge': './src/hoge.js',
        'hoge2': './src/hoge2.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

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
            // // CSS
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            // // 画像
            // // ※別ファイルにする挙動があやしいので使えない
            // {
            //     test: /\.(gif|png|jpe?g|svg|eot|wof|woff|woff2|ttf)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 // ※別ファイルにする挙動があやしいので使えない
            //                 //limit: 50 * 1024,
            //                 name: './images/[name].[ext]'
            //             }
            //         }
            //     ]
            // },
            // ※別ファイルにする挙動があやしいので使えない
            // {
            //     test: /\.(gif|png|jpe?g|svg|eot|wof|woff|ttf)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: './images/[name].[ext]'
            //             }
            //         }
            //     ],
            // },

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