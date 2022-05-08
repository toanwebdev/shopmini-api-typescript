import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Brand } from './Brand'
import { Category } from './Category'
import { Image } from './Image'
import { ProductColor } from './ProductColor'
import { Specifications } from './Specifications'
import { User } from './User'

@Entity()
export class Product extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ length: 150 })
	name!: string

	@Column({ length: 150 })
	slug!: string

	@Column({ length: 150 })
	avatar!: string

	@Column({ default: 0 })
	priceImport!: number

	@Column({ default: 0 })
	price!: number

	@Column({ default: 0 })
	priceDiscount: number

	@Column({ default: 0 })
	gift: number

	@Column({ default: false })
	installment: boolean

	@Column({ default: false })
	new: boolean

	@Column({ default: false })
	discount: boolean

	@Column({ default: 0 })
	quantity!: number

	@Column({ type: 'longtext' })
	description!: string

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@OneToMany((_to) => ProductColor, (product_color) => product_color.product)
	product_colors: ProductColor[]

	@OneToMany((_to) => Image, (image) => image.product)
	images: Image[]

	@OneToMany(
		(_to) => Specifications,
		(specifications) => specifications.product,
	)
	specificationsArray: Specifications[]

	@Column()
	categoryId!: number

	@ManyToOne((_to) => Category, (category) => category.products)
	category!: Category

	@Column()
	brandId!: number

	@ManyToOne((_to) => Brand, (brand) => brand.products)
	brand!: Brand

	@Column()
	userCreatedId!: number

	@ManyToOne((_to) => User, (user_created) => user_created.product_createds)
	user_created!: User

	@Column()
	userUpdatedId!: number

	@ManyToOne((_to) => User, (user_updated) => user_updated.product_updateds)
	user_updated!: User
}
