import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
