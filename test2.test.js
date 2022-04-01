const {add} = require("./test2.js");

test("A", () => {
    expect(add(1, 2)).toBe(3);
})