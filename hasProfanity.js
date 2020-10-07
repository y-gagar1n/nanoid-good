function checkByList(input, bad_words) {
    for (var i = 0; i < bad_words.length; i++) {
        // Number 1 can be interpreted as l or I.
        var sanitizedBadWord = bad_words[i].replace('l', 'i')
        if (new RegExp(sanitizedBadWord, "gi").test(input)) return true;
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
        var inputWithNumbersReplaced = input
            .replace('1', 'i')
            .replace('3', 'e')
            .replace('5', 's')
            .replace('8', 'b')
            .replace('0', 'o')
        
        for (var i = 0; i < list.length; i++) {
            if (checkByList(inputWithNumbersReplaced, list[i])) return true;
        }
        return false;
    };
};

module.exports = hasProfanityFactory;