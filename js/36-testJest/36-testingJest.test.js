const { test, expect } = require("@jest/globals");
const subtract = require("./36-testingJest");

test("subtract 2 numbers", () => {
    expect(subtract(2,1)).toBe(1)
})