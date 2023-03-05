import { FC } from "react"
import { useGameContext } from "../../hooks/useGameContext"

import FieldItem from "./FieldItem"
import styles from "./Field.module.scss"

const Field: FC = () => {
	const { field } = useGameContext()
	return (
		<div className={styles.field}>
			{field.map((row, x) => (
				<div className={styles.row} key={x}>
					{row.map((info, y) => (
						<FieldItem cell={info} key={info.id} x={x} y={y} />
					))}
				</div>
			))}
		</div>
	)
}

export default Field
