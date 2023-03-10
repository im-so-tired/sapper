import { FC, useState } from "react"

import awesome from "../../assets/emoticons/awesome.png"
import dead from "../../assets/emoticons/dead.png"
import good from "../../assets/emoticons/good.png"
import pushImg from "../../assets/emoticons/pushIn.png"
import worried from "../../assets/emoticons/worried.png"
import { useGameContext } from "../../hooks/useGameContext"

const smiles = {
	playing: good,
	lose: dead,
	win: awesome,
	pressed: worried,
}

const Smile: FC = () => {
	const { gameStatus, restartGame, pressed } = useGameContext()
	const [push, setPush] = useState(false)
	let srcImg = pressed ? smiles.pressed : smiles[gameStatus]
	if (push && gameStatus === "playing") srcImg = pushImg

	return (
		<button
			onClick={restartGame}
			onMouseDown={() => setPush(true)}
			onMouseUp={() => setPush(false)}
			onMouseLeave={() => setPush(false)}
		>
			<img draggable={false} alt="smile" src={srcImg} />
		</button>
	)
}

export default Smile
