import { Cell } from "../../../types/cell"

const countMines = 40

const randomInt = (max = 15) => {
	return Math.floor(Math.random() * max)
}

export const createField = (size = 16) => {
	let field: Cell[][] = new Array(size).fill(
		new Array(size).fill({
			opened: false,
			value: 0,
			isFlag: false,
			isQuestion: false,
		})
	)
	field = field.map(row => [...row].map(cell => ({ ...cell })))

	function inc(x: number, y: number) {
		if (x >= 0 && x < size && y >= 0 && y < size) {
			if (field[x][y].value !== -1) field[x][y].value += 1
		}
	}

	for (let i = 0; i <= countMines; ) {
		const x = randomInt()
		const y = randomInt()
		if (field[x][y].value === -1) continue
		field[x][y].value = -1
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
	return field
}
