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

    findAllTipusAlimentacioByUserId(userId: number): Promise<TipusAlimentacio[]> {
        return this.repositoryAlimentacio.find({ user: { id: userId } });
    }



}
