var hasProfanity = require('../hasProfanity');

it('returns false on innocent id', function() {
    expect(hasProfanity("qwerty")).toEqual(false);
});

it('returns true on bad word', function() {
    expect(hasProfanity("aSs")).toEqual(true);
});

it('returns true on bad word in between of larger word', function() {
    expect(hasProfanity("abcaSsqwe")).toEqual(true);
});

it('returns true on bad word in non-english', function() {
    require("../locale/de");
    expect(hasProfanity("arScH")).toEqual(true);
});