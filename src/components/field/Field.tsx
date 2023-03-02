import { FC, useState } from "react"
import styles from "./Field.module.scss"
import { createField } from "./utils/createField"

const Field: FC = () => {
	const [field, setField] = useState(() => createField())
	return (
		<div className={styles.field}>
			{field.map((row, y) => (
				<div className={styles.row} key={y}>
					{row.map((cell, x) => (
						<span className={styles.cell} key={x}>
							{cell}
						</span>
					))}
				</div>
			))}
		</div>
	)
}

export default Field
