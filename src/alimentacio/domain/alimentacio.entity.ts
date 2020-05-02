import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/domain/user.entity';

@Entity('alimentacions')
export class Alimentacio {
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

    @Column()
    tipusAlimentacioId: number;

    @ManyToOne(type => User)
    user: User;

    constructor() {
        this.dataInsercio = new Date();
    }
}