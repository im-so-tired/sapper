import { FC } from "react"
import { useGameContext } from "../../hooks/useGameContext"

import good from "../../assets/emoticons/good.png"
import dead from "../../assets/emoticons/dead.png"
import awesome from "../../assets/emoticons/awesome.png"
import worried from "../../assets/emoticons/worried.png"

const smiles = {
	playing: good,
	lose: dead,
	win: awesome,
	pressed: worried,
}

const Smile: FC = () => {
	const { gameStatus, restartGame } = useGameContext()
	return (
		<button onClick={restartGame}>
			<img alt="smile" src={smiles[gameStatus]} />
		</button>
	)
}

export default Smile
