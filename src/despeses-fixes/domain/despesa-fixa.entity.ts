import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/domain/user.entity';

@Entity('despeses-fixes')
export class DespesaFixa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 6, scale: 2 })
    import: number;

    @Column()
    descripcio: string;

    @Column()
    mesInici?: number;

    @Column()
    mesFi?: number;

    @Column()
    dataInsercio: Date;

    @ManyToOne(type => User)
    user: User;


    constructor() {
        this.dataInsercio = new Date();
    }
}