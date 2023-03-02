import { FC } from "react"
import styles from "./Field.module.scss"
import { Cell } from "../../types/cell"

const FieldItem: FC<{ cell: Cell }> = ({ cell }) => {
	const { value, isFlag, isQuestion, opened } = cell
	return <span className={styles.cell}>{value}</span>
}

export default FieldItem
