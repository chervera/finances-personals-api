import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consum } from '../domain/consum.entity';
import { FilterService } from 'src/core/filter/filter.service';

@Injectable()
export class ConsumsService {

    constructor(
        @InjectRepository(Consum)
        private repository: Repository<Consum>,
        private filterService: FilterService
    ) { }

    findAllByUserId(userId: number, filter: { year?: number, month?: number }): Promise<Consum[]> {
        return this.repository.find({ user: { id: userId }, ...this.filterService.generateWhereFromFilter(filter) });
    }

    findOneByUserId(id: string, userId: number): Promise<Consum> {
        return this.repository.findOne({ where: { id, user: { id: userId } } });
    }

    async create(item: Consum): Promise<void> {
        await this.repository.insert(item);
    }

    async update(id: number, item: Partial<Consum>): Promise<void> {
        await this.repository.update(id, item);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
