import { Injectable } from '@nestjs/common';
import { MasterDTO } from '../dto/master.dto';
import { TipusAlimentacio } from '../domain/tipus-alimentacio.entity';
import { User } from 'src/users/domain/user.entity';


@Injectable()
export class TipusAlimentacioAssemblerService {

    public static mapDTOToEntity(dto: Partial<MasterDTO>, userId: number, entity?: TipusAlimentacio): TipusAlimentacio {
        if (!entity) {
            entity = new TipusAlimentacio();
            entity.user = new User();
            entity.user.id = userId;
        }
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: TipusAlimentacio): MasterDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
