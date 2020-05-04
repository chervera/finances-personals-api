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

    findAllByUserId(userId, filter: { year?: number, month?: number }): Promise<DespesaFixa[]> {
        //TODO: s'ha de filtrar els resultats per mes o any
        return this.repository.find({ where: { year: filter.year, month: filter.month, user: { id: userId } } });
    }

    findOneByUserId(id: string, userId: number): Promise<DespesaFixa> {
        return this.repository.findOne({ where: { id, user: { id: userId } } });
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
