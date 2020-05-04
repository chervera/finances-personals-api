import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingres } from '../domain/ingres.entity';

@Injectable()
export class IngressosService {

    constructor(
        @InjectRepository(Ingres)
        private repository: Repository<Ingres>,
    ) { }

    findAllByUserId(userId: number): Promise<Ingres[]> {
        return this.repository.find({ user: { id: userId } });
    }

    findOneByUserId(id: string, userId: number): Promise<Ingres> {
        return this.repository.findOne({ where: { id, user: { id: userId } } });
    }

    async create(item: Ingres): Promise<void> {
        await this.repository.insert(item);
    }

    async update(id: number, item: Partial<Ingres>): Promise<void> {
        await this.repository.update(id, item);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
