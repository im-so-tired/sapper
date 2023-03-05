import { useState } from "react"

import { countMines, size } from "../constants"
import { Cell } from "../types/cell"
import { GameStatus } from "../types/gameStatus"
import { createField } from "../utils/createField"
import { createMine } from "../utils/createMine"

import { IGameContext } from "./useGameContext"

export const useGame = (): IGameContext => {
	const [field, setField] = useState<Cell[][]>(() => createField())
	const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
	const [counterMine, setCounterMine] = useState(40)
	const [firstClick, setFirstClick] = useState(true)
	const [clickedMine, setClickedMine] = useState<{
		x: number
		y: number
	} | null>(null)
	const [pressed, setPressed] = useState(false)

	const changePressed = (newState: boolean) => {
		setPressed(newState)
	}
	const leftClick = (x: number, y: number) => {
		if (gameStatus !== "playing" || field[x][y].status === "opened") return
		if (field[x][y].status !== "fill") return
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
			setClickedMine({ x, y })
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
				if (clearedField[coorX][coorY].status === "fill")
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
		let notOpenedCell = size * size - countMines - 1
		field.forEach(row =>
			row.forEach(cell => {
				if (cell.value !== -1 && cell.status === "opened") notOpenedCell -= 1
			})
		)
		console.log(notOpenedCell)
		if (notOpenedCell === 0) setGameStatus("win")
	}

	const rightClick = (x: number, y: number) => {
		if (gameStatus !== "playing" || field[x][y].status === "opened") return
		switch (field[x][y].status) {
			case "flag":
				setCounterMine(prev => prev + 1)
				field[x][y].status = "question"
				break
			case "question":
				field[x][y].status = "fill"
				break
			default:
				if (counterMine !== 0) setCounterMine(prev => prev - 1)
				field[x][y].status = "flag"
		}
		setField(prev => JSON.parse(JSON.stringify(prev)))
	}

	const changeGameStatus = (newStatus: GameStatus) => {
		setGameStatus(newStatus)
	}

	const restartGame = () => {
		setField(() => createField())
		setGameStatus("playing")
		setCounterMine(40)
		setFirstClick(true)
		setClickedMine(null)
	}
	return {
		field,
		gameStatus,
		leftClick,
		rightClick,
		counterMine,
		clickedMine,
		firstClick,
		changeGameStatus,
		restartGame,
		pressed,
		changePressed,
	}
}
