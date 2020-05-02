import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('consums')
export class Consum {
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
    tipusConsumId: number;

    constructor() {
        this.dataInsercio = new Date();
    }
}