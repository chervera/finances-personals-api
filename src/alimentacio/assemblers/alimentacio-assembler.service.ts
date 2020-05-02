import { Injectable } from '@nestjs/common';
import { Alimentacio } from '../domain/alimentacio.entity';
import { AlimentacioDTO } from '../dto/alimentacio.dto';
import { User } from 'src/users/domain/user.entity';


@Injectable()
export class AlimentacioAssemblerService {

    public static mapDTOToEntity(dto: Partial<AlimentacioDTO>, userId: number, entity?: Alimentacio): Alimentacio {
        if (!entity) {
            entity = new Alimentacio();
            entity.user = new User();
            entity.user.id = userId;
        }
        return { ...entity, ...dto };
    }

    public static mapEntityToDTO(entity: Alimentacio): AlimentacioDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
