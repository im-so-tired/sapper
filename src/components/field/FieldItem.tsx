import { FC, MouseEvent, useEffect, useState } from "react"
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
	const defaultMask =
		cell.status === "opened" ? Masks.opened[cell.value] : Masks[cell.status]
	const [sourceMask, setSourceMask] = useState<string>(defaultMask)

	const mouseDownHandler = () => {
		if (status === "fill") {
			setSourceMask(Masks.opened[0])
		}
	}

	const mouseLeaveHandler = () => {
		if (status === "fill") {
			setSourceMask(Masks.fill)
		}
	}

	let mask = (
		<img
			alt={`${cell.status}`}
			height={32}
			width={32}
			draggable={false}
			src={sourceMask}
		/>
	)
	return (
		<span
			className={styles.cell}
			onClick={e => handleClick(e)}
			onContextMenu={e => {
				e.preventDefault()
				rightClick(x, y)
			}}
			onMouseDown={mouseDownHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{mask}
		</span>
	)
}

export default FieldItem
