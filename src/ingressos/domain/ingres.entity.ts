import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/domain/user.entity';

@Entity('ingressos')
export class Ingres {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 6, scale: 2 })
    import: number;

    @Column()
    concepte: string;

    @Column()
    data: Date;

    @Column()
    dataInsercio: Date;

    @ManyToOne(type => User)
    user: User;

    constructor() {
        this.dataInsercio = new Date();
    }
}