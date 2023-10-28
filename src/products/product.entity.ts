import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: String })
    name: string;

    @Column({ type: String })
    description: string;

    @Column({ type: Number })
    price: number;

    @Column({ type: Number })
    quantity: number;

    @ManyToOne(() => User, (user) => user.products)
    user: User;
}
