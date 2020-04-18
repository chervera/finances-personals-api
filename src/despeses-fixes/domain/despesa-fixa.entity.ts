import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('despeses-fixes')
export class DespesaFixa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    import: number;

    @Column()
    descripcio: string;

    @Column()
    mesInici?: number;

    @Column()
    mesFi?: number;

    @Column()
    dataInsercio: Date;

    constructor() {
        this.dataInsercio = new Date();
    }
}