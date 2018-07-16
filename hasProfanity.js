var langs = ["en", "ar", "cs", "da", "de", "eo", 
             "es", "fa", "fi", "fr", "hi", "hu", 
             "it", "ja", "ko", "nl", "no", "pl", 
             "pt", "ru", "sv", "th", "tlh", "tr", 
             "zh", "fr-CA-u-sd-caqc"];

var list = langs.map(lang => require("naughty-words/" + lang + ".json"));

function checkByList(input, bad_words) {
    for (var i = 0; i < bad_words.length; i++) {
        if (new RegExp(bad_words[i], "gi").test(input)) return true;
    }
    return false;
}

module.exports = function (input) {
    for (var i = 0; i < list.length; i++) {
        if (checkByList(input, list[i])) return true;
    }
    return false;
};