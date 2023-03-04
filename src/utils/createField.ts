import { Cell } from "../types/cell"
import { size } from "../constants"

export const createField = () => {
	let field: Cell[][] = new Array(size).fill(
		new Array(size).fill({
			status: "fill",
			value: 0,
		})
	)
	field = field.map(row => [...row].map(cell => ({ ...cell })))

	return field
}
