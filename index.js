/**
  * Copyright (C) 2016 pantojs.xyz
  * index.js
  *
  * changelog
  * 2016-06-24[18:00:20]:revised
  *
  * @author yanni4night@gmail.com
  * @version 1.0.0
  * @since 1.0.0
  */
'use strict';

const message = 'This is a test project, DO NOT USE IT!'

module.exports = () => message;

module.exports.toString = () => message;

console.error(message);