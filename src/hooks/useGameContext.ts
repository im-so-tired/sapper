import { createContext, useContext } from "react"
import { Cell } from "../types/cell"
import { GameStatus } from "../types/gameStatus"

export interface IGameContext {
	field: Cell[][]
	gameStatus: GameStatus
	rightClick: () => void
	leftClick: (x: number, y: number) => void
	counter: number
}

const GameContext = createContext<IGameContext | null>(null)

export const GameProvider = GameContext.Provider

export const useGameContext = () => {
	const data = useContext(GameContext)
	if (!data)
		throw new Error("Can not `useGameContext` outside of the `GameProvide`")
	return data
}
