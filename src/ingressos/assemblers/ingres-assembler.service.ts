import { Injectable } from '@nestjs/common';
import { Ingres } from '../domain/ingres.entity';
import { IngresDTO } from '../dto/ingres.dto';
import { User } from 'src/users/domain/user.entity';

@Injectable()
export class IngresAssemblerService {

    public static mapDTOToEntity(dto: Partial<IngresDTO>, userId: number, entity?: Ingres): Ingres {
        if (!entity) {
            entity = new Ingres();
            entity.user = new User();
            entity.user.id = userId;
        }
        return { ...entity, ...dto };
    }

    public static mapEntityToDTO(entity: Ingres): IngresDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
