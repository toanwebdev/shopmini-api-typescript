export interface Product {
	id?: string
	avatar: string
	name: string
	priceImport?: number | string
	price?: number | string
	priceDiscount?: number | string
	gift?: number | string
	installment: boolean
	new: boolean
	discount: boolean
	slug: string
	quantity: number
	description: string
	categoryId?: number | string
	brandId?: number | string
	userCreatedId?: number | string
	userUpdatedId?: number | string
}

export interface ProductName {
	id: number
	name: string
	slug: string
}
