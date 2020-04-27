import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipusalimentacions')
export class TipusAlimentacio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcio: string;

    @Column()
    dataInsercio: Date;

    constructor() {
        this.dataInsercio = new Date();
    }
}