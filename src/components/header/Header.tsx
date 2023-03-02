import { FC } from "react"
import styles from "./Header.module.scss"
import MineCounter from "./MineCounter"
import Smile from "./Smile"
import Timer from "./Timer"

const Header: FC = () => {
	return (
		<div className={styles.head}>
			<MineCounter />
			<Smile />
			<Timer />
		</div>
	)
}

export default Header
