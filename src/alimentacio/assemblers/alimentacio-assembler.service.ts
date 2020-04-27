import { Injectable } from '@nestjs/common';
import { Alimentacio } from '../domain/Alimentacio.entity';
import { AlimentacioDTO } from '../dto/alimentacio.dto';


@Injectable()
export class AlimentacioAssemblerService {

    public static mapDTOToEntity(dto: Partial<AlimentacioDTO>): Alimentacio {
        const entity = new Alimentacio();
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: Alimentacio): AlimentacioDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
