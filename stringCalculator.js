function add(numbersString) {
	if (!numbersString) return 0;

	const numbersArray = numbersString.split(/[\n,]/).map(Number);

	return numbersArray.reduce((acc, curr) => {
		if (Number.isNaN(curr)) {
			return acc;
		}
		return acc + curr;
	}, 0);
}

module.exports = add;
