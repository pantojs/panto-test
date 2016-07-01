/**
 * Copyright (C) 2016 pantojs.xyz
 * pantofile.js
 *
 * changelog
 * 2016-06-24[18:05:50]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

const rimraf = require('rimraf');
rimraf.sync('output');

module.exports = panto => {
    panto.loadTransformer('read');
    panto.loadTransformer('write');
    panto.loadTransformer('uglify');
    panto.loadTransformer('css-sprites');
    panto.loadTransformer('filter');
    panto.loadTransformer('less');

    panto.pick('src/**/*.{jpg,png,gif}').pipe(panto.read()).pipe(panto.write()).end('image');

    panto.pick('src/*.js').pipe(panto.read()).pipe(panto.uglify()).pipe(panto.write()).end('*.js');
    
    const cssAndSprites = panto.pick('src/*.less').pipe(panto.read()).pipe(panto.less({
        lessOptions: {
            compress: true
        }
    })).pipe(panto.cssSprites());


    const sprites = cssAndSprites.pipe(panto.filter({pattern:'**/*.{png,jpg,gif}'}));
    const css = cssAndSprites.pipe(panto.filter({pattern:'src/**/*.less'}));
    
    sprites.pipe(panto.write()).end('sprites');

    css.pipe(panto.write({
        destname: file => file.filename.replace(/\.less/, '.css')
    })).end('*.css');
};