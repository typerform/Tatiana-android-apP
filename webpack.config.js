const VueLoaderPlugin = require("vue-loader/lib/plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack = require("webpack");

module.exports = {
    entry : './src/main.js',
    module : {
        rules : [
            { 
                test : /\.js$/, 
                use: [
                    {
                        loader : 'babel-loader',
                        options: {
                            plugins: ['@babel/plugin-syntax-dynamic-import']
                        }
                    }
                ]
            },
            { test : /\.vue$/, loader : 'vue-loader' },
            { test : /\.css$/, loader : [ MiniCssExtractPlugin.loader, 'css-loader' ] },
            {
                test: /\.s(c|a)ss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      implementation: require('sass'),
                      fiber: require('fibers'),
                      indentedSyntax: true
                    },
                    options: {
                      implementation: require('sass'),
                      sassOptions: {
                        fiber: require('fibers'),
                        indentedSyntax: true
                      },
                    },
                  },
                ],
              }
        ]
    },
    devServer : {
        open: true,
        hot: true
    },
    plugins : [
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: 'favicon.png'
        }),
        new MiniCssExtractPlugin({"filename":"style.css"}),
        new webpack.HotModuleReplacementPlugin()
    ]
}