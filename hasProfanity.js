var en = require("naughty-words/en.json");
var de = require("naughty-words/de.json");

var list = [en, de];

function checkByList(input, bad_words) {
    for(var i = 0; i < bad_words.length; i++) {
        if(new RegExp(bad_words[i], "gi").test(input)) return true;
    }
    return false;
}

module.exports = function(input) { 
    for(var i =0; i < list.length; i++)
    {
        if(checkByList(input, list[i])) return true;
    }
    return false;
};