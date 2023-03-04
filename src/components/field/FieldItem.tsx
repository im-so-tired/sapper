import { FC, MouseEvent } from "react"
import styles from "./Field.module.scss"
import { Cell } from "../../types/cell"
import { useGameContext } from "../../hooks/useGameContext"
import { Masks } from "../../utils/mask"

const FieldItem: FC<{ cell: Cell; x: number; y: number }> = ({
	cell,
	x,
	y,
}) => {
	const { leftClick, rightClick } = useGameContext()
	const { value, status } = cell
	const handleClick = (e: MouseEvent) => {
		leftClick(x, y)
	}
	let mask = <img alt="fill-cell" height={32} width={32} src={Masks.fill} />
	if (status === "flag")
		mask = <img alt="flag" height={32} width={32} src={Masks.flag} />
	if (status === "question")
		mask = <img alt="question" height={32} width={32} src={Masks.question} />
	if (status === "opened") mask = <span>{value}</span>
	return (
		<span
			className={styles.cell}
			onClick={e => handleClick(e)}
			onContextMenu={e => {
				e.preventDefault()
				rightClick(x, y)
			}}
		>
			{mask}
		</span>
	)
}

export default FieldItem
