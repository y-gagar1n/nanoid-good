var en = require("naughty-words/en.json");

module.exports = function(input) { 
    for(var i = 0; i < en.length; i++) {
        if(new RegExp(en[i], "gi").test(input)) return true;
    }
    return false;
};