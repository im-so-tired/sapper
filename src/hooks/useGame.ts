import { useState } from "react"
import { createField } from "../components/field/utils/createField"
import { GameStatus } from "../types/gameStatus"
import { Cell } from "../types/cell"

export const useGame = () => {
	const [field, setField] = useState<Cell[][]>(() => createField())
	const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
	const [counter, setCounter] = useState(0)

	const clear = (x: number, y: number) => {}
	const leftClick = (x: number, y: number) => {
		if (gameStatus === "lose" || gameStatus === "win") return

		let newField = JSON.parse(JSON.stringify(field))
		newField[x][y].opened = true

		if (newField[x][y].value === -1) {
			setGameStatus("lose")
			newField = newField.map((row: Cell[]) =>
				row.map(cell => {
					const newCell = cell
					if (cell.value === -1) {
						newCell.opened = true
					}
					return newCell
				})
			)
		}
		setField(newField)
	}

	const rightClick = () => {
		setCounter(prev => prev + 1)
	}
	return { field, gameStatus, leftClick, rightClick, counter }
}
