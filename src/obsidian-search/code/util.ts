
export function nthIndexOfInString(text: string, n: number, searchString: string): number {
	/*
	 returns the index of the nth occurrence of searchString (or last if too few)
	 */
	let index = -1;
	for (let i = 0; i < n; i++) {
		index = text.indexOf(searchString, index + 1);
		if (index < 0) return text.length;
	}
	return index;
}
