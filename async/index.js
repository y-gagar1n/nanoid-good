var nanoid = require('nanoid/async');
var wrapper = require('./wrapper');

module.exports = wrapper(nanoid);