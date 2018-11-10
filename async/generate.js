var generate = require('nanoid/async/generate');
var wrapper = require('./wrapper');

module.exports = wrapper(generate);