import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DespesaFixa } from '../domain/despesa-fixa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DespesesFixesService {

    constructor(
        @InjectRepository(DespesaFixa)
        private repository: Repository<DespesaFixa>,
    ) { }

    findAll(): Promise<DespesaFixa[]> {
        return this.repository.find();
    }

    findOne(id: string): Promise<DespesaFixa> {
        return this.repository.findOne(id);
    }

    async create(item: DespesaFixa): Promise<void> {
        await this.repository.insert(item);
    }

    async update(id: number, item: Partial<DespesaFixa>): Promise<void> {
        await this.repository.update(id, item);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
