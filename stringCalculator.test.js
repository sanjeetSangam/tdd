const add = require("./stringCalculator.js");

test("should return 0 for an empty string", () => {
	// basic scenarios
	expect(add("")).toBe(0);
	expect(add("1")).toBe(1);
	expect(add("1,5")).toBe(6);
	expect(add("1,5,1,0")).toBe(7);
	expect(add(`7,""`)).toBe(7);

	// multiple line input
	expect(add("1,5\n1,0")).toBe(7);
	expect(add("1\n5,1,0")).toBe(7);
	expect(add("1,5\n1\n0")).toBe(7);
	expect(add("1,5\n1\n0,9")).toBe(16);

	// multiple delimiters
	expect(add("//;\n1;5")).toBe(6);
	expect(add("//;\n1;5;1;0")).toBe(7);
	expect(add("//;\n1;5;1;0;9")).toBe(16);

	// multiple delimiters with multiple lines
	expect(add("//[-]\n1-5")).toBe(6);
	expect(add("//[;]\n1;5;1;0")).toBe(7);
	expect(add("//[;]\n1;5;1;0;9")).toBe(16);
});
