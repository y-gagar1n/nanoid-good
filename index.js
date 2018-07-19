var nanoid = require('nanoid');
var wrapper = require('./wrapper');

module.exports = wrapper(nanoid);