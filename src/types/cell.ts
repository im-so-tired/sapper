export interface Cell {
	status: "opened" | "flag" | "question" | "fill"
	value: number
}
