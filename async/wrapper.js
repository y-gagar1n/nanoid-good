var hasProfanity = require("../hasProfanity");

var wrapper = function (fn) {
    return function (locales) {
        return function () {
            var outerArgs = arguments;
            return new Promise(function(resolve, reject) {
                var retry = function() { fn.apply(this, outerArgs)
                    .catch(reject)
                    .then(function(id) {
                        if (!hasProfanity(locales)(id)) 
                        {
                            resolve(id);
                        }
                        else retry();
                    });
                };
                retry();
            });
        }
    };
};

module.exports = wrapper;