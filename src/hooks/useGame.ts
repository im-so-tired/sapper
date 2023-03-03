import { useState } from "react"
import { createField } from "../components/field/utils/createField"
import { GameStatus } from "../types/gameStatus"
import { Cell } from "../types/cell"

export const useGame = () => {
	const [field, setField] = useState<Cell[][]>(() => createField())
	const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
	const [counter, setCounter] = useState(0)

	const leftClick = (x: number, y: number) => {
		// if (gameStatus === "lose" || gameStatus === "win") return
		if (field[x][y].value === -1) {
			setGameStatus("lose")
			const newField = field.map((row: Cell[]) =>
				row.map(cell => {
					const newCell = cell
					if (cell.value === -1) {
						newCell.opened = true
					}
					return newCell
				})
			)
			setField(newField)
		} else if (field[x][y].value === 0) {
			const clearing: [number, number][] = []
			const clear = (setOffX: number, setOffY: number) => {
				if (
					setOffX >= 0 &&
					setOffX < field.length &&
					setOffY >= 0 &&
					setOffY < field.length
				) {
					if (field[setOffX][setOffY].opened) return
					clearing.push([setOffX, setOffY])
				}
			}
			clear(x, y)
			while (clearing.length) {
				console.log(clearing)
				const [coorX, coorY] = clearing.pop()!
				field[coorX][coorY].opened = true
				if (field[coorX][coorY].value !== 0) continue

				clear(coorX + 1, coorY)
				clear(coorX - 1, coorY)

				clear(coorX, coorY + 1)
				clear(coorX, coorY - 1)
			}
			setField(prev => JSON.parse(JSON.stringify(prev)))
		} else {
			field[x][y].opened = true
			setField(prev => JSON.parse(JSON.stringify(prev)))
		}
	}

	const rightClick = () => {
		setCounter(prev => prev + 1)
	}
	return { field, gameStatus, leftClick, rightClick, counter }
}
