var generate = require('nanoid/generate');
var wrapper = require('./wrapper');

module.exports = wrapper(generate);