import { FC } from "react"
import styles from "./Header.module.scss"
import MineCounter from "./MineCounter"
import Smile from "./Smile"
import Timer from "./Timer"
import { useGameContext } from "../../hooks/useGameContext"

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
