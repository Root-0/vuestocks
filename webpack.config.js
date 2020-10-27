module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //       'file-loader',
            //     ],
            // },
        ]
    }
}