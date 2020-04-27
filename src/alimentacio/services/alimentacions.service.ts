import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alimentacio } from '../domain/alimentacio.entity';

@Injectable()
export class AlimentacionsService {

    constructor(
        @InjectRepository(Alimentacio)
        private repository: Repository<Alimentacio>,
    ) { }

    findAll(): Promise<Alimentacio[]> {
        return this.repository.find();
    }

    findOne(id: string): Promise<Alimentacio> {
        return this.repository.findOne(id);
    }

    async create(item: Alimentacio): Promise<void> {
        await this.repository.insert(item);
    }

    async update(id: number, item: Partial<Alimentacio>): Promise<void> {
        await this.repository.update(id, item);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
