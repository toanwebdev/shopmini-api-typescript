import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Brand } from './Brand'
import { Category } from './Category'

@Entity()
export class CategoryBrand extends BaseEntity {
	@PrimaryColumn()
	categoryId!: number

	@ManyToOne((_to) => Category, (category) => category.category_brands)
	category!: Category

	@PrimaryColumn()
	brandId!: number

	@ManyToOne((_to) => Brand, (brand) => brand.category_brands)
	brand!: Brand
}
