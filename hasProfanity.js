function checkByList(input, bad_words) {
    for (var i = 0; i < bad_words.length; i++) {
        if (new RegExp(bad_words[i], "gi").test(input)) return true;
    }
    return false;
}

var hasProfanityFactory = function () {
    var list = [].slice.call(arguments);
    if (list.length == 0 || typeof list[0] === 'string') {
        console.warn("No locales were added to nanoid-good. Maybe you forgot to add `require('nanoid-good/locale/en')`?")
        return false;
    }
    return function (input) {
        for (var i = 0; i < list.length; i++) {
            if (checkByList(input, list[i])) return true;
        }
        return false;
    };
};

module.exports = hasProfanityFactory;