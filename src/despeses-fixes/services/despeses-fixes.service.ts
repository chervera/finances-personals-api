import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DespesaFixa } from '../domain/despesa-fixa.entity';
import { Repository } from 'typeorm';
import { FilterService } from 'src/core/filter/filter.service';

@Injectable()
export class DespesesFixesService {

    constructor(
        @InjectRepository(DespesaFixa)
        private repository: Repository<DespesaFixa>,
        private filterService: FilterService
    ) { }

    findAllByUserId(userId, filter: { year?: number, month?: number }): Promise<DespesaFixa[]> {
        return this.repository.find({ where: { ...this.filterService.generateWhereFromFilter(filter), user: { id: userId } } });
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
