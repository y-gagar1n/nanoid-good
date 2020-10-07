var nanoid = require('nanoid/async');
var wrapper = require('./wrapper');

module.exports = {
    nanoid: wrapper(nanoid.nanoid),
    customAlphabet: (...locales) => (alphabet, size) => wrapper(nanoid.customAlphabet(alphabet, size))(...locales),
    random: nanoid.random
}