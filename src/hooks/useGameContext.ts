import { createContext, useContext } from "react"
import { Cell } from "../types/cell"
import { GameStatus } from "../types/gameStatus"

interface IGameContext {
	field: Cell[][]
	gameStatus: GameStatus
	rightClick: () => void
	leftClick: () => void
}

const gameContext = createContext<IGameContext | null>(null)

export const GameProvider = gameContext.Provider

export const useGameContext = () => {
	const data = useContext(gameContext)
	if (!data)
		throw new Error("Can not `useLayoutContext` outside of the `LayoutProvide`")
	return data
}
