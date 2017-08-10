/**
 The MIT License (MIT)

 Copyright (c) 2017 Ivan Vilanculo

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 **/

WebFontPlugin = require( 'webpack-webfont' ).default;

path = require( 'path' );

module.exports = {
    entry: './index.js',
    output: {
        filename: 'weather-icon.js',
        path: path.resolve( __dirname, 'dist' )
    },
    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: [
                    'style',
                    'css'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'sass'
                ]
            },
            {
                loader: 'url-loader',
                test: /\.(svg|eot|ttf|woff|woff2)?$/
            }
        ]
    },
    resolve: {
        modules: ["web_modules", "node_modules"]
    },
    plugins: [
        new WebFontPlugin({
            files: path.resolve(__dirname, 'src/svg/*.svg'),
            fontName: 'OpenWeatherIcons',
            cssTemplateClassName: "owi",
            css: true,
            cssFormat: 'css',
            template: path.resolve(__dirname, 'src/templates/open-weather-icons.css.njk'),
            cssTemplateFontPath: '../fonts/',
            dest: {
                fontsDir: path.resolve(__dirname, 'dist/fonts'),
                stylesDir: path.resolve(__dirname, 'dist/css'),
                css: path.resolve(__dirname, 'src/scss/_weather-icons.css'),
            }
        }),
        new WebFontPlugin({
            files: path.resolve(__dirname, 'src/svg/*.svg'),
            fontName: 'WeatherIcons',
            cssTemplateClassName: "owi",
            css: true,
            cssFormat: 'scss',
            template: path.resolve(__dirname, 'src/templates/open-weather-icons.scss.njk'),
            cssTemplateFontPath: '../fonts/',
            dest: {
                fontsDir: path.resolve(__dirname, 'fonts'),
                stylesDir: path.resolve(__dirname, 'scss'),
                css: path.resolve(__dirname, 'src/scss/_weather-icons.scss'),
            }
        })
    ]
};