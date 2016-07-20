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

rimraf.sync('output', {
    force: true
});

module.exports = panto => {
    panto.loadTransformer('read');
    panto.loadTransformer('write');
    panto.loadTransformer('uglify');
    panto.loadTransformer('css-sprites');
    panto.loadTransformer('filter');
    panto.loadTransformer('less');

    panto.pick('src/**/*.{jpg,png,gif}').tag('img').read().write();

    panto.pick('src/*.js').tag('js').read().uglify().write();

    const cssAndSprites = panto.pick('src/*.less').tag('css').read().less({
        lessOptions: {
            compress: true
        }
    }).cssSprites();


    const sprites = cssAndSprites.filter({
        pattern: '**/*.{png,jpg,gif}'
    });
    const css = cssAndSprites.filter({
        pattern: 'src/**/*.less'
    });

    sprites.write();

    css.write({
        destname: file => file.filename.replace(/\.less/, '.css')
    });
};