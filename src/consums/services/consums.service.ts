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

    findAllByUserId(userId: number): Promise<Consum[]> {
        return this.repository.find({ user: { id: userId } });
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
