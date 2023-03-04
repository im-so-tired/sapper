import { FC } from "react"
import { v4 as uuid } from "uuid"
import { useGameContext } from "../../hooks/useGameContext"

import FieldItem from "./FieldItem"
import styles from "./Field.module.scss"

const Field: FC = () => {
	const { field } = useGameContext()
	return (
		<div className={styles.field}>
			{field.map((row, x) => (
				<div className={styles.row} key={uuid()}>
					{row.map((info, y) => (
						<FieldItem cell={info} key={uuid()} x={x} y={y} />
					))}
				</div>
			))}
		</div>
	)
}

export default Field
