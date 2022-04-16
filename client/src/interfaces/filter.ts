interface Content {
	id: number
	name: string
}

export interface Filter {
	id: number
	title: string
	contents: Content[]
}
