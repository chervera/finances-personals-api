import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consum } from '../domain/consum.entity';

@Injectable()
export class ConsumsService {

    constructor(
        @InjectRepository(Consum)
        private repository: Repository<Consum>,
    ) { }

    findAll(): Promise<Consum[]> {
        return this.repository.find();
    }

    findOne(id: string): Promise<Consum> {
        return this.repository.findOne(id);
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
