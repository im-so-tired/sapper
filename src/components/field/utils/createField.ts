const countMines = 40

const randomInt = (max = 15) => {
	return Math.floor(Math.random() * max)
}

export const createField = (size = 16) => {
	let field: number[][] = new Array(size).fill(0)
	field = field.map(() => new Array(size).fill(0))

	function inc(x: number, y: number) {
		if (x >= 0 && x < size && y >= 0 && y < size) {
			if (field[x][y] !== -1) field[x][y] += 1
		}
	}

	for (let i = 0; i <= countMines; ) {
		const x = randomInt()
		const y = randomInt()
		if (field[x][y] === -1) continue
		field[x][y] = -1
		inc(x - 1, y - 1)
		inc(x - 1, y + 1)
		inc(x + 1, y - 1)
		inc(x + 1, y + 1)

		inc(x - 1, y)
		inc(x + 1, y)
		inc(x, y - 1)
		inc(x, y + 1)
		i += 1
	}
	console.log(field)
	return field
}
