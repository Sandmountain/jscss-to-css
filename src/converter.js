const capRegexp = /([A-Z])+/g;

export const convertToCss = (input) => {
	const testArr = input.replace(/(\r\n|\n|\r)/gm, "").split(",");
	const formatted = testArr.map((style) => style.trim());

	const res = formatted.map((style) => {
		style = style.replace(/["]+/g, "");
		const isCap = style.search(capRegexp);

		if (isCap !== -1) {
			return (
				style.substring(0, isCap) +
				"-" +
				style.charAt(isCap).toLocaleLowerCase() +
				style.substring(isCap + 1)
			);
		}
		return style;
	});

	return res.reduce((pred, next, index) => {
		if (index < res.length - 1) {
			return (pred += next + ";\n");
		} else {
			return (pred += next);
		}
	}, "");
};
