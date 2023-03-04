import { Cell } from "../types/cell"
import { countMines, size } from "../constants"

const randomInt = (max = 15) => {
	return Math.floor(Math.random() * max)
}

export const createMine = (
	field: Cell[][],
	firstClickX: number,
	firstClickY: number
) => {
	const newField = field

	function inc(x: number, y: number) {
		if (x >= 0 && x < size && y >= 0 && y < size) {
			if (field[x][y].value !== -1) newField[x][y].value += 1
		}
	}

	for (let i = 0; i <= countMines; ) {
		const x = randomInt()
		const y = randomInt()
		if (
			field[x][y].value === -1 ||
			(x >= firstClickX - 1 &&
				x <= firstClickX + 1 &&
				y >= firstClickY - 1 &&
				y <= firstClickY + 1)
		)
			continue
		newField[x][y].value = -1
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

	return newField
}
