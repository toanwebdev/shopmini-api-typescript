import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { CategoryBrand } from './CategoryBrand'
import { Image } from './Image'
import { Product } from './Product'
import { ProductColor } from './ProductColor'

@Entity()
export class Brand extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ length: 50 })
	name!: string

	@Column({ length: 150 })
	avatar!: string

	@OneToMany((_to) => ProductColor, (product_color) => product_color.color)
	product_colors: ProductColor[]

	@OneToMany((_to) => Image, (image) => image.color)
	images: Image[]

	@OneToMany((_to) => Product, (product) => product.brand)
	products!: Product[]

	@OneToMany((_to) => CategoryBrand, (category_brand) => category_brand.brand)
	category_brands!: CategoryBrand[]
}
