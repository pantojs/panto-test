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

module.exports = panto => {
    panto.loadTransformer('read');
    panto.loadTransformer('write');
    panto.loadTransformer('uglify');
    panto.loadTransformer('less');

    panto.pick('src/*.js').pipe(panto.read()).pipe(panto.uglify()).pipe(panto.write()).end('*.js');
    panto.pick('src/*.less').pipe(panto.read()).pipe(panto.less({
        lessOptions: {
            compress: true
        }
    })).pipe(panto.write({
        destname: file => file.filename.replace(/\.less/, '.css')
    })).end('*.js');
};