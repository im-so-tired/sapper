import { FC } from "react"
import zero from "../../assets/numbersToCount/0.jpg"

const MinuteCounter: FC = () => {
	return (
		<div className="flex-center">
			<img alt="number" src={zero} />
			<img alt="number" src={zero} />
			<img alt="number" src={zero} />
		</div>
	)
}

export default MinuteCounter
