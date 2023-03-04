import { Cell } from "../types/cell"
import { size } from "../constants"

export const createField = () => {
	let field: Cell[][] = new Array(size).fill(
		new Array(size).fill({
			opened: false,
			value: 0,
			isFlag: false,
			isQuestion: false,
		})
	)
	field = field.map(row => [...row].map(cell => ({ ...cell })))

	return field
}
