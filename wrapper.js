var hasProfanity = require("./hasProfanity").default


var wrapper = function (fn) {
    return function () {
        while (true) {
            var id = fn.apply(this, arguments);
            if (!hasProfanity(id)) return id;
        }
    };
};

wrapper.__proto__.defineLocale = function(locale) { hasProfanity.defineLocale(locale);}

module.exports = wrapper;