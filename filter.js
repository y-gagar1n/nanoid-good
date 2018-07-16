var en = require("naughty-words/en.json");

module.exports = function(input) { 
    return en.includes(input); 
};