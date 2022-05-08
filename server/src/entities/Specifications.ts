import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Product } from './Product'

@Entity()
export class Specifications extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ length: 50 })
	name!: string

	@Column()
	content!: string

	@Column()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.specificationsArray)
	product!: Product
}
