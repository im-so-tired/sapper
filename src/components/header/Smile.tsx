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
	const { gameStatus, restartGame, pressed } = useGameContext()
	const srcImg = pressed ? smiles.pressed : smiles[gameStatus]
	return (
		<button onClick={restartGame}>
			<img alt="smile" src={srcImg} />
		</button>
	)
}

export default Smile
