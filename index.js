var nanoid = require('nanoid');
var filter = require('./filter');

module.exports = filter(nanoid);