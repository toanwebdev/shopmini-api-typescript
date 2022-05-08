import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Image } from './Image'
import { ProductColor } from './ProductColor'

@Entity()
export class Color extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ length: 50 })
	name!: string

	@OneToMany((_to) => ProductColor, (product_color) => product_color.color)
	product_colors: ProductColor[]

	@OneToMany((_to) => Image, (image) => image.color)
	images: Image[]
}
