// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const autoprefixer = require('autoprefixer');


module.exports = [
    /*=============================================m_ÔÔ_m=============================================\
      FRONT - NORMAL CONFIG
    \================================================================================================*/
    {
        name: 'front',
        entry: './src/index.js',
        mode: 'production',
        externals: {
            'vue': 'Vue'
        },
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.vue$/,
                    loader: 'weweb-strip-block',
                    options: {
                        blocks: [
                            {
                                start: 'wwManager:start',
                                end: 'wwManager:end'
                            }
                        ]
                    }
                },
                // this will apply to both plain `.js` files
                // AND `<script>` blocks in `.vue` files
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [autoprefixer]
                                }
                            }
                        },
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "front.js"
        },
        plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin(),
        ]
    },
    /*=============================================m_ÔÔ_m=============================================\
      MANAGER - NORMAL CONFIG
    \================================================================================================*/
    {
        name: 'manager',
        entry: './src/index.js',
        mode: 'production',
        externals: {
            'vue': 'Vue'
        },
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [

                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                // this will apply to both plain `.js` files
                // AND `<script>` blocks in `.vue` files
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [autoprefixer]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "manager.js"
        },
        plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin()
        ]
    },

    /*=============================================m_ÔÔ_m=============================================\
      FRONT - IE CONFIG
    \================================================================================================*/
    {
        name: 'front-ie',
        entry: './src/index.js',
        mode: 'production',
        externals: {
            'vue': 'Vue'
        },
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.vue$/,
                    loader: 'weweb-strip-block',
                    options: {
                        blocks: [
                            {
                                start: 'wwManager:start',
                                end: 'wwManager:end'
                            }
                        ]
                    }
                },
                // this will apply to both plain `.js` files
                // AND `<script>` blocks in `.vue` files
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ["babel-preset-es2015"],
                        plugins: ['transform-async-to-generator']
                    }
                },
                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [autoprefixer]
                                }
                            }
                        },
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "front-ie.js"
        },
        plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin(),
        ]
    },

    /*=============================================m_ÔÔ_m=============================================\
      MANAGER - IE CONFIG
    \================================================================================================*/
    {
        name: 'manager-ie',
        entry: './src/index.js',
        mode: 'production',
        externals: {
            'vue': 'Vue'
        },
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [

                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                // this will apply to both plain `.js` files
                // AND `<script>` blocks in `.vue` files
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ["babel-preset-es2015"],
                        plugins: ['transform-async-to-generator']
                    }
                },
                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [autoprefixer]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "manager-ie.js"
        },
        plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin()
        ]
    },
]