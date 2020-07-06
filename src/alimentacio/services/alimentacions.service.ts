import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alimentacio } from '../domain/alimentacio.entity';
import { FilterService } from 'src/core/filter/filter.service';

@Injectable()
export class AlimentacionsService {

    constructor(
        @InjectRepository(Alimentacio)
        private repository: Repository<Alimentacio>,
        private filterService: FilterService
    ) { }

    findAllByUserId(userId: number, filter: { year?: number, month?: number }): Promise<Alimentacio[]> {
        return this.repository.find({ user: { id: userId }, ...this.filterService.generateWhereFromFilter(filter) });
    }

    findOneByUserId(id: string, userId: number): Promise<Alimentacio> {
        return this.repository.findOne({ where: { id, user: { id: userId } } });
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
