import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Color } from './Color'
import { Product } from './Product'

@Entity()
export class ProductColor extends BaseEntity {
	@PrimaryColumn()
	colorId!: number

	@ManyToOne((_to) => Color, (color) => color.product_colors)
	color!: Color

	@PrimaryColumn()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.product_colors)
	product!: Product

	@Column({ length: 150 })
	avatar!: string
}
