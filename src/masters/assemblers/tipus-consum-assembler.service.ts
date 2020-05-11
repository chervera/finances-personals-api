import { Injectable } from '@nestjs/common';
import { MasterDTO } from '../dto/master.dto';
import { TipusAlimentacio } from '../domain/tipus-alimentacio.entity';
import { TipusConsum } from '../domain/tipus-consum.entity';
import { User } from 'src/users/domain/user.entity';


@Injectable()
export class TipusConsumAssemblerService {

    public static mapDTOToEntity(dto: Partial<MasterDTO>, userId: number, entity?: TipusConsum): TipusConsum {
        if (!entity) {
            entity = new TipusConsum();
            entity.user = new User();
            entity.user.id = userId;
        }
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: TipusConsum): MasterDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
