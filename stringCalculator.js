function add(numbersString) {
	if (!numbersString) return 0;

	let delimiter = /[\n,]/;
	if (numbersString.startsWith("//")) {
		const delimiterLine = numbersString.split("\n")[0];
		delimiter = new RegExp(delimiterLine.slice(2));
		numbersString = numbersString.split("\n")[1];
	}

	const numbersArray = numbersString.split(delimiter).map(Number);

	const negatives = numbersArray.filter((num) => num < 0);
	if (negatives.length > 0) {
		throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
	}

	return numbersArray.reduce((acc, curr) => {
		if (Number.isNaN(curr)) {
			return acc;
		}
		return acc + curr;
	}, 0);
}

module.exports = add;
