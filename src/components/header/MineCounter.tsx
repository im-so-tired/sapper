import { FC } from "react"

import { useGameContext } from "../../hooks/useGameContext"

import { numberReplace } from "./helper/numberReplace"

const MineCounter: FC = () => {
	const { counterMine } = useGameContext()
	const str = `000${String(counterMine)}`.slice(-3)
	return (
		<div className="flex-center">
			<img alt="number" src={numberReplace[str[0]]} />
			<img alt="number" src={numberReplace[str[1]]} />
			<img alt="number" src={numberReplace[str[2]]} />
		</div>
	)
}

export default MineCounter
