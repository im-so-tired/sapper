import { FC } from "react"
import zero from "../../assets/numbersToCount/0.png"
import { useGameContext } from "../../hooks/useGameContext"

const MineCounter: FC = () => {
	const { counterMine } = useGameContext()
	const array = []
	const str = `000${String(counterMine)}`.slice(-3)
	console.log(str)
	return (
		<div className="flex-center">
			<img alt="number" src={zero} />
			<img alt="number" src={zero} />
			<img alt="number" src={zero} />
		</div>
	)
}

export default MineCounter
