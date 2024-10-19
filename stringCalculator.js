function add(numbersString) {
	if (!numbersString) return 0;

	const numbersArray = numbersString.split(",").map(Number);
	let sum = 0;

	for (const number of numbersArray) {
		if (!number) {
			sum += 0;
		} else {
			sum += number;
		}
	}

	return sum;
}

module.exports = add;
