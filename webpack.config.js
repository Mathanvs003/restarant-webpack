const path=require('path')
const Terser=require('terser-webpack-plugin');
const minicss=require('mini-css-extract-plugin');

module.exports={
    entry:"./index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"./src")
    },
    mode:"none",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[minicss.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new Terser,
        new minicss({filename:'style.css'}),
    ]
};
