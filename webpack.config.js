const path = require('path');
const miniCss = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: './js/app.js',
    
    output: {
        path: __dirname+'/stylesheet' ,

        publicPath: '/'
    },

    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader?url=false',
                'sass-loader',
            ]
        }]
    },
   /* : {
        minimizer: [
            new minify({})
        ],
    },*/
    plugins: [
        new miniCss({
            filename: './style.css',
        }),
    ]
};
