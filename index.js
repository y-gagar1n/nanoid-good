var nanoid = require('nanoid');
var wrapper = require('./wrapper');

module.exports = {
    nanoid: wrapper(nanoid.nanoid),
    customAlphabet: wrapper(nanoid.customAlphabet),
    customRandom: wrapper(nanoid.customRandom), 
    urlAlphabet: nanoid.urlAlphabet, 
    random: nanoid.random
}