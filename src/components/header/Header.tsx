import { FC } from "react"

import { useGameContext } from "../../hooks/useGameContext"

import styles from "./Header.module.scss"
import MineCounter from "./MineCounter"
import Smile from "./Smile"
import Timer from "./Timer"

const Header: FC = () => {
	const { firstClick, gameStatus } = useGameContext()
	return (
		<div className={styles.head}>
			<MineCounter />
			<Smile />
			<Timer firstClick={firstClick} gameStatus={gameStatus} />
		</div>
	)
}

export default Header
