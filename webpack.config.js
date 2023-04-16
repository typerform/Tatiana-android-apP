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
         