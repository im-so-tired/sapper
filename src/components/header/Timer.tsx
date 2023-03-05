import { FC, memo, useEffect, useState } from "react"

import { GameStatus } from "../../types/gameStatus"

import { numberReplace } from "./helper/numberReplace"

const Timer: FC<{ gameStatus: GameStatus; firstClick: boolean }> = memo(
	({ gameStatus, firstClick }) => {
		const [seconds, setSeconds] = useState(0)
		useEffect(() => {
			if (gameStatus !== "playing" || firstClick || seconds === 999) return
			const timerId = setTimeout(() => setSeconds(prev => prev + 1), 1000)
			return () => clearTimeout(timerId)
		})
		useEffect(() => {
			setSeconds(0)
		}, [firstClick])
		const strSeconds = `000${seconds}`.slice(-3)
		return (
			<div className="flex-center">
				<img alt="number" src={numberReplace[strSeconds[0]]} />
				<img alt="number" src={numberReplace[strSeconds[1]]} />
				<img alt="number" src={numberReplace[strSeconds[2]]} />
			</div>
		)
	}
)
Timer.displayName = "Timer"
export default Timer
