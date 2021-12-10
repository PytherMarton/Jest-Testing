const {add} = require("../app.js");

test(`It has to be equal to 3`, () => {
    expect(add(1,2)).toEqual(3)
});