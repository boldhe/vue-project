const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')



module.exports = {
    entry:path.join(__dirname, './src/main.js'),
    output:{
        path:path.join(__dirname, './disk'),
        filename:'bundle.js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    }
}