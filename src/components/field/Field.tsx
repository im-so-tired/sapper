import { FC } from "react"
import styles from "./Field.module.scss"
import { useGameContext } from "../../hooks/useGameContext"
import FieldItem from "./FieldItem"

const Field: FC = () => {
	const { field } = useGameContext()
	return (
		<div className={styles.field}>
			{field.map((row, y) => (
				<div className={styles.row} key={y}>
					{row.map((info, x) => (
						<FieldItem cell={info} key={x} />
					))}
				</div>
			))}
		</div>
	)
}

export default Field
