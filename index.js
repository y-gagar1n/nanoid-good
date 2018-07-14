var nanoid = require('nanoid');
var Filter = require('bad-words');

module.exports = function () {
    var filter = new Filter();

    while (true) {
        var id = nanoid()
        if (!filter.isProfane(id)) return id; 
    }
};