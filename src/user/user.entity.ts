import { Exclude } from 'class-transformer';
import { Product } from 'src/products/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: String })
    firstName: string;

    @Column({ type: String })
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ type: String })
    @Exclude()
    password: string;

    @Column({ type: String })
    phone: string;

    @OneToMany(() => Product, (product) => product.user)
    products: Product[];
}
