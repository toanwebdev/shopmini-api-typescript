import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Product } from './Product'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ length: 100 })
	firstName!: string

	@Column({ length: 100 })
	lastName!: string

	@Column({ unique: true, length: 100 })
	username!: string

	@Column()
	password!: string

	@Column({ default: 0 })
	tokenVersion!: number

	@OneToMany(
		(_to) => Product,
		(product_created) => product_created.user_created,
	)
	product_createds: Product[]

	@OneToMany(
		(_to) => Product,
		(product_updated) => product_updated.user_updated,
	)
	product_updateds: Product[]
}
