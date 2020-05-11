import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipusConsum } from '../domain/tipus-consum.entity';
import { TipusAlimentacio } from '../domain/tipus-alimentacio.entity';

@Injectable()
export class MastersService {

    constructor(
        @InjectRepository(TipusConsum)
        private repositoryConsum: Repository<TipusConsum>,
        @InjectRepository(TipusAlimentacio)
        private repositoryAlimentacio: Repository<TipusAlimentacio>,
    ) { }

    findAllTipusConsumByUserId(userId: number): Promise<TipusConsum[]> {
        return this.repositoryConsum.find({ user: { id: userId } });
    }

    findOneTipusConsumByUserId(id: string, userId: number): Promise<TipusConsum> {
        return this.repositoryConsum.findOne({ where: { id, user: { id: userId } } });
    }

    async createTipusConsum(item: TipusConsum): Promise<void> {
        await this.repositoryConsum.insert(item);
    }

    async removeTipusConsum(id: string): Promise<void> {
        await this.repositoryConsum.delete(id);
    }

    findAllTipusAlimentacioByUserId(userId: number): Promise<TipusAlimentacio[]> {
        return this.repositoryAlimentacio.find({ user: { id: userId } });
    }

    findOneTipusAlimentacioByUserId(id: string, userId: number): Promise<TipusAlimentacio> {
        return this.repositoryAlimentacio.findOne({ where: { id, user: { id: userId } } });
    }

    async createTipusAlimentacio(item: TipusAlimentacio): Promise<void> {
        await this.repositoryAlimentacio.insert(item);
    }

    async removeTipusAlimentacio(id: string): Promise<void> {
        await this.repositoryAlimentacio.delete(id);
    }



}
