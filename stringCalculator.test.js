const add = require("./stringCalculator.js");

test("should return 0 for an empty string", () => {
	expect(add("")).toBe(0);
	expect(add("1")).toBe(1);
	expect(add("1,5")).toBe(6);
	expect(add("1,5,1,0")).toBe(7);
	expect(add(`7,""`)).toBe(7);
});
