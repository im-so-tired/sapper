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
	const [counter, setCounter] = useState(0)
	const [firstClick, setFirstClick] = useState(true)

	const clear = (x: number, y: number) => {}
	const leftClick = (x: number, y: number) => {

		if (gameStatus !== "playing") return
		let firstField: Cell[][] = []
		if (firstClick) {
			firstField = createMine(field, x, y)
			console.log("first")
		}
		if (field[x][y].value === -1) {

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
					if (clearedField[setOffX][setOffY].opened) return
					clearing.push([setOffX, setOffY])
				}
			}

			clear(x, y)

			while (clearing.length) {
				const [coorX, coorY] = clearing.pop()!
				clearedField[coorX][coorY].opened = true
				if (clearedField[coorX][coorY].value !== 0) continue

				// clear(coorX + 1, coorY)
				// clear(coorX - 1, coorY)
				//
				// clear(coorX, coorY + 1)
				// clear(coorX, coorY - 1)

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
			field[x][y].opened = true
			setField(prev => JSON.parse(JSON.stringify(prev)))
		}
		setField(newField)
	}

	const rightClick = (x: number, y: number) => {
		if (field[x][y].opened) return
		if (field[x][y].isFlag) {
			field[x][y].isFlag = false
			field[x][y].isQuestion = true
		} else if (field[x][y].isQuestion) {
			field[x][y].isQuestion = false
		} else {
			field[x][y].isFlag = true
		}
		setField(prev => JSON.parse(JSON.stringify(prev)))
	}
	return { field, gameStatus, leftClick, rightClick, counter }
}
