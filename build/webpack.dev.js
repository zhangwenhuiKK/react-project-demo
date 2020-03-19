const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true,
        compress: true,
        // 接口代理转发
        // proxy: {
        //     '/testapi': {
        //     target: 'https://www.easy-mock.com/mock/5dff0acd5b188e66c6e07329/react-template',
        //     changeOrigin: true,
        //     secure: false,
        //     pathRewrite: { '^/testapi': '' },
        //     },
        // },
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
})