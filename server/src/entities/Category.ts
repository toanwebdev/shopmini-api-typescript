import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { CategoryBrand } from './CategoryBrand'
import { Product } from './Product'

@Entity()
export class Category extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ length: 50 })
	name!: string

	@OneToMany((_to) => Product, (product) => product.category)
	products!: Product[]

	@OneToMany(
		(_to) => CategoryBrand,
		(category_brand) => category_brand.category,
	)
	category_brands!: CategoryBrand[]
}
