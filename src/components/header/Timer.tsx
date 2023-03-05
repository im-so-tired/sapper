import { FC, useEffect, useState } from "react"
import { numberReplace } from "./helper/numberReplace"
import { useGameContext } from "../../hooks/useGameContext"

const Timer: FC = () => {
	const [seconds, setSeconds] = useState(0)
	const { gameStatus, firstClick } = useGameContext()
	useEffect(() => {
		if (gameStatus !== "playing" || firstClick) return
		const timerId = setTimeout(() => setSeconds(prev => prev + 1), 1000)
		return () => clearTimeout(timerId)
	})
	console.log("render")
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

export default Timer
