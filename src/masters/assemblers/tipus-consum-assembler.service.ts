import { Injectable } from '@nestjs/common';
import { MasterDTO } from '../dto/master.dto';
import { TipusAlimentacio } from '../domain/tipus-alimentacio.entity';
import { TipusConsum } from '../domain/tipus-consum.entity';


@Injectable()
export class TipusConsumAssemblerService {

    public static mapDTOToEntity(dto: Partial<MasterDTO>): TipusConsum {
        const entity = new TipusConsum();
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: TipusConsum): MasterDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
