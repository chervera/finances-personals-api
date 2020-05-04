import { Injectable } from '@nestjs/common';
import { DespesaFixa } from '../domain/despesa-fixa.entity';
import { DespesaFixaDTO } from '../dto/despesa-fixa.dto';
import { User } from 'src/users/domain/user.entity';

@Injectable()
export class DespesesFixesAssemblerService {

    public static mapDTOToEntity(dto: Partial<DespesaFixaDTO>, userId: number, entity?: DespesaFixa): DespesaFixa {
        if (!entity) {
            entity = new DespesaFixa();
            entity.user = new User();
            entity.user.id = userId;
        }
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: DespesaFixa): DespesaFixaDTO {
        const { dataInsercio, ...dto } = entity;
        return dto;
    }
}
