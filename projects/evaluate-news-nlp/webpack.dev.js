const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },   
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        
        ]
    },
    devServer: {
        
        inline: true,

        port: 8080,

        publicPath: '/',

        setup(app){

            const express = require('express')
            const dotenv = require('dotenv').config()
            const fetch = require("node-fetch");

            app.use(express.json());
            
            app.post("/test", function(req, res){
                const url = req.body.url

                fetch("https://api.meaningcloud.com/sentiment-2.1?key="+process.env.API_KEY+"&url="+url+"&lang=en", {
                    method: 'POST',
                    redirect: 'follow'
                    })
                .then(response => ({
                  status: response.status, 
                  body: response.json()
                }))
                .then(({ status, body }) => {
                    console.log(status)
                    return body
                })
                .then(data=>res.json(data))
                .catch(error => console.log('error', error));
            })

        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}
