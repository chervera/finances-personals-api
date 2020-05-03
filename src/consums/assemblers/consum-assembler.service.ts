import { Injectable } from '@nestjs/common';
import { Consum } from '../domain/consum.entity';
import { ConsumDTO } from '../dto/consum.dto';
import { User } from 'src/users/domain/user.entity';


@Injectable()
export class ConsumAssemblerService {

    public static mapDTOToEntity(dto: Partial<ConsumDTO>, userId: number, entity?: Consum): Consum {
        if (!entity) {
            entity = new Consum();
            entity.user = new User();
            entity.user.id = userId;
        }
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: Consum): ConsumDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
