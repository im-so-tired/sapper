export interface Cell {
	status: "opened" | "flag" | "question" | "fill"
	value: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
	id: string
}
