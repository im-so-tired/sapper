import { useState } from "react"
import { createField } from "../components/field/utils/createField"
import { GameStatus } from "../types/gameStatus"
import { Cell } from "../types/cell"

export const useGame = () => {
	const [field, setField] = useState<Cell[][]>(() => createField())
	const [gameStatus, setGameStatus] = useState<GameStatus>("playing")

	const leftClick = () => {}
	const rightClick = () => {}
	return { field, gameStatus, leftClick, rightClick }
}
