import { createContext, useContext } from "react"

import { Cell } from "../types/cell"
import { GameStatus } from "../types/gameStatus"

export interface IGameContext {
	field: Cell[][]
	gameStatus: GameStatus
	rightClick: (x: number, y: number) => void
	leftClick: (x: number, y: number) => void
	counterMine: number
	clickedMine: null | { x: number; y: number }
	firstClick: boolean
	changeGameStatus: (newStatus: GameStatus) => void
	restartGame: () => void
	pressed: boolean
	changePressed: (newState: boolean) => void
}

const GameContext = createContext<IGameContext | null>(null)

export const GameProvider = GameContext.Provider

export const useGameContext = () => {
	const data = useContext(GameContext)
	if (!data)
		throw new Error("Can not `useGameContext` outside of the `GameProvide`")
	return data
}
