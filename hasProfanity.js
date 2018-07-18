var list = [ require("./locale/en")];

function checkByList(input, bad_words) {
    for (var i = 0; i < bad_words.length; i++) {
        if (new RegExp(bad_words[i], "gi").test(input)) return true;
    }
    return false;
}

var hasProfanity = function(input) {
    for (var i = 0; i < list.length; i++) {
        if (checkByList(input, list[i])) return true;
    }
    return false;
};

hasProfanity.__proto__.defineLocale = function(locale) {
    list.push(locale);
}

module.exports = hasProfanity;