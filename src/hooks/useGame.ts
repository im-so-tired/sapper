import { useState } from "react"

import { GameStatus } from "../types/gameStatus"
import { Cell } from "../types/cell"
import { createField } from "../utils/createField"
import { createMine } from "../utils/createMine"
import { size } from "../constants"
import { IGameContext } from "./useGameContext"

export const useGame = (): IGameContext => {
	const [field, setField] = useState<Cell[][]>(() => createField())
	const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
	const [counterMine, setCounterMine] = useState(40)
	const [firstClick, setFirstClick] = useState(true)

	const leftClick = (x: number, y: number) => {
		if (gameStatus !== "playing" || field[x][y].status === "opened") return
		let firstField: Cell[][] = []
		if (firstClick) {
			firstField = createMine(field, x, y)
		}
		if (field[x][y].value === -1) {
			setGameStatus("lose")
			const newField = field.map((row: Cell[]) =>
				row.map(cell => {
					const newCell = cell
					if (cell.value === -1) {
						newCell.status = "opened"
					}
					return newCell
				})
			)
			setField(newField)
		} else if (field[x][y].value === 0) {
			let clearedField: Cell[][] = []

			if (firstClick) {
				clearedField = firstField
				setFirstClick(false)
			} else clearedField = field

			const clearing: [number, number][] = []
			const clear = (setOffX: number, setOffY: number) => {
				if (setOffX >= 0 && setOffX < size && setOffY >= 0 && setOffY < size) {
					if (clearedField[setOffX][setOffY].status === "opened") return
					clearing.push([setOffX, setOffY])
				}
			}

			clear(x, y)

			while (clearing.length) {
				const [coorX, coorY] = clearing.pop()!
				clearedField[coorX][coorY].status = "opened"
				if (clearedField[coorX][coorY].value !== 0) continue

				clear(coorX - 1, coorY - 1)
				clear(coorX - 1, coorY + 1)
				clear(coorX + 1, coorY - 1)
				clear(coorX + 1, coorY + 1)

				clear(coorX - 1, coorY)
				clear(coorX + 1, coorY)
				clear(coorX, coorY - 1)
				clear(coorX, coorY + 1)
			}

			setField(prev => JSON.parse(JSON.stringify(prev)))
		} else {
			field[x][y].status = "opened"
			setField(prev => JSON.parse(JSON.stringify(prev)))
		}
	}

	const rightClick = (x: number, y: number) => {
		if (field[x][y].status === "opened") return
		switch (field[x][y].status) {
			case "flag":
				field[x][y].status = "question"
				break
			case "question":
				field[x][y].status = "fill"
				break
			default:
				field[x][y].status = "flag"
		}
		setField(prev => JSON.parse(JSON.stringify(prev)))
	}

	return { field, gameStatus, leftClick, rightClick, counterMine }
}
