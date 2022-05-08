import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Color } from './Color'
import { Product } from './Product'

@Entity()
export class Image extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ length: 150 })
	link!: string

	@Column()
	name!: string

	@Column()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.images)
	product!: Product

	@Column()
	colorId!: number

	@ManyToOne((_to) => Color, (color) => color.images)
	color!: Color
}
