var filter = require('../filter');

it('returns false on innocent id', function() {
    expect(filter("qwerty")).toEqual(false);
});

it('returns true on bad word', function() {
    expect(filter("aSs")).toEqual(true);
});

it('returns true on bad word in between of larger word', function() {
    expect(filter("abcaSsqwe")).toEqual(true);
})