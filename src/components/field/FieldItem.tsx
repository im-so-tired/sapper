import { FC } from "react"
import styles from "./Field.module.scss"
import { Cell } from "../../types/cell"
import { Masks } from "./utils/mask"
import { useGameContext } from "../../hooks/useGameContext"

const FieldItem: FC<{ cell: Cell; x: number; y: number }> = ({
	cell,
	x,
	y,
}) => {
	const { leftClick, rightClick } = useGameContext()
	const { value, isFlag, isQuestion, opened } = cell
	const handleClick = () => {
		leftClick(x, y)
		// rightClick()
	}
	return (
		<span className={styles.cell} onClick={() => handleClick()}>
			{opened ? (
				value
			) : (
				<img alt="fill-cell" height={32} width={32} src={Masks.fill} />
			)}
		</span>
	)
}

export default FieldItem
