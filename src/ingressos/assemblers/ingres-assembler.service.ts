import { Injectable } from '@nestjs/common';
import { Ingres } from '../domain/ingres.entity';
import { IngresDTO } from '../dto/ingres.dto';

@Injectable()
export class IngresAssemblerService {

    public static mapDTOToEntity(dto: Partial<IngresDTO>): Ingres {
        const entity = new Ingres();
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: Ingres): IngresDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
