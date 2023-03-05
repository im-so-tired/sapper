import { FC, MouseEvent, useEffect, useState } from "react"

import clickedMineImg from "../../assets/field/clicked-mine.png"
import notMine from "../../assets/field/not-mine.png"
import { useGameContext } from "../../hooks/useGameContext"
import { Cell } from "../../types/cell"
import { Masks } from "../../utils/mask"

import styles from "./Field.module.scss"

const FieldItem: FC<{ cell: Cell; x: number; y: number }> = ({
	cell,
	x,
	y,
}) => {
	const {
		leftClick,
		rightClick,
		clickedMine,
		gameStatus,
		pressed,
		changePressed,
	} = useGameContext()
	const { value, status } = cell

	const [sourceMask, setSourceMask] = useState<string>(Masks.fill)

	useEffect(() => {
		if (!pressed)
			setSourceMask(() =>
				status === "opened" ? Masks.opened[value] : Masks[status]
			)
		if (clickedMine && clickedMine.x === x && clickedMine.y === y) {
			setSourceMask(clickedMineImg)
		} else if (gameStatus === "lose" && status === "flag" && value !== -1) {
			setSourceMask(notMine)
		}
	}, [status, gameStatus, x, y, clickedMine, value, pressed])

	const mouseDownHandler = (e: MouseEvent) => {
		if (status === "fill" && gameStatus !== "win" && gameStatus !== "lose") {
			setSourceMask(Masks.opened[0])
			if (e.button === 0) changePressed(true)
		}
	}

	const mouseLeaveHandler = () => {
		if (status === "fill" && gameStatus !== "win" && gameStatus !== "lose") {
			setSourceMask(Masks.fill)
			changePressed(false)
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
			onClick={() => leftClick(x, y)}
			onContextMenu={e => {
				e.preventDefault()
				rightClick(x, y)
			}}
			onMouseDown={e => mouseDownHandler(e)}
			onMouseUp={mouseLeaveHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{mask}
		</span>
	)
}

export default FieldItem
