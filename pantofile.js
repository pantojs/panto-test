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

    panto.pick('*.js').pipe(panto.read()).pipe(panto.write()).end('*.js');
};