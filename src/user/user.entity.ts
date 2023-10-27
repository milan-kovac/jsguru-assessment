import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    password: string;

    @Column({ type: String })
    phone: string;
}
