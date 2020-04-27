import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    constructor() {
        this.dataInsercio = new Date();
    }
}