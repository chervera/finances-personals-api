import { Injectable } from '@nestjs/common';
import { MasterDTO } from '../dto/master.dto';
import { TipusAlimentacio } from '../domain/tipus-alimentacio.entity';


@Injectable()
export class TipusAlimentacioAssemblerService {

    public static mapDTOToEntity(dto: Partial<MasterDTO>): TipusAlimentacio {
        const entity = new TipusAlimentacio();
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: TipusAlimentacio): MasterDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
