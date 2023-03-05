import { FC, MouseEvent, useEffect, useState } from "react"
import styles from "./Field.module.scss"
import { Cell } from "../../types/cell"
import { useGameContext } from "../../hooks/useGameContext"
import { Masks } from "../../utils/mask"
import clickedMineImg from "../../assets/field/clicked-mine.png"
import notMine from "../../assets/field/not-mine.png"

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
		changeGameStatus,
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

	const handleClick = (e: MouseEvent) => {
		leftClick(x, y)
	}

	const mouseDownHandler = () => {
		if (status === "fill" && gameStatus !== "win" && gameStatus !== "lose") {
			setSourceMask(Masks.opened[0])
			changePressed(true)
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
			onClick={e => handleClick(e)}
			onContextMenu={e => {
				e.preventDefault()
				rightClick(x, y)
			}}
			onMouseDown={mouseDownHandler}
			onMouseUp={mouseLeaveHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{mask}
		</span>
	)
}

export default FieldItem
