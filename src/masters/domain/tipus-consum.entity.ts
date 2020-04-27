import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipusconsums')
export class TipusConsum {
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