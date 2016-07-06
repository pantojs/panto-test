/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[21:12:27]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.0.1
 * @since 0.0.1
 */
'use strict';
const assert = require('assert');
const fs = require('fs');

describe('build', () => {
    describe('read->uglify->write', () => {
        it('should get compressed js', () => {
            const js = __dirname + '/../output/src/uglify.js';
            assert.ok(fs.existsSync(js));
            const content = fs.readFileSync(js, 'utf8');
            assert.deepEqual(content.length, 521);
        });
    });
    describe('read->less->write', () => {
        it('should get compressed less', () => {
            const css = __dirname + '/../output/src/less.css';
            assert.ok(fs.existsSync(css));
            const content = fs.readFileSync(css, 'utf8');
            assert.deepEqual(content.split('\n').length, 1);
        });
    });
});