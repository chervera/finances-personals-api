import { Injectable } from '@nestjs/common';
import { Consum } from '../domain/consum.entity';
import { ConsumDTO } from '../dto/consum.dto';


@Injectable()
export class ConsumAssemblerService {

    public static mapDTOToEntity(dto: Partial<ConsumDTO>): Consum {
        const entity = new Consum();
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: Consum): ConsumDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
