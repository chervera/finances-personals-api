import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/domain/user.entity';

@Entity('tipusalimentacions')
export class TipusAlimentacio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcio: string;

    @Column()
    dataInsercio: Date;

    @ManyToOne(type => User)
    user: User;

    constructor() {
        this.dataInsercio = new Date();
    }
}