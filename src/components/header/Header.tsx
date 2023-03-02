import { FC } from "react"
import styles from "./Header.module.scss"
import MinuteCounter from "./MinuteCounter"
import Smile from "./Smile"
import Timer from "./Timer"

const Header: FC = () => {
	return (
		<div className={styles.head}>
			<MinuteCounter />
			<Smile />
			<Timer />
		</div>
	)
}

export default Header
