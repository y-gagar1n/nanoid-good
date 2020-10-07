var nanoid = require('nanoid');
var wrapper = require('./wrapper');

module.exports = {
    nanoid: wrapper(nanoid.nanoid),
    customAlphabet: (...locales) => (alphabet, size) => wrapper(nanoid.customAlphabet(alphabet, size))(...locales),
    customRandom: (...locales) => (alphabet, size, randomFunc) => wrapper(nanoid.customRandom(alphabet, size, randomFunc))(...locales), 
    urlAlphabet: nanoid.urlAlphabet, 
    random: nanoid.random
}