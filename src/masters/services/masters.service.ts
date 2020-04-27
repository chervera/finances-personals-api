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

    findAllTipusConsum(): Promise<TipusConsum[]> {
        return this.repositoryConsum.find();
    }

    findAllTipusAlimentacio(): Promise<TipusAlimentacio[]> {
        return this.repositoryAlimentacio.find();
    }



}
