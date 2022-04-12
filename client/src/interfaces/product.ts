export interface Product {
	id?: number
	avatar: string
	name: string
	priceImport: number
	price: number
	priceDiscount: number
	gift: number
	installment: boolean
	new: boolean
	discount: boolean
	slug: string
}

export interface ProductName {
	id: number
	name: string
	slug: string
}
