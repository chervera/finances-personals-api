import { Injectable } from '@nestjs/common';
import { DespesaFixa } from '../domain/despesa-fixa.entity';
import { DespesaFixaDTO } from '../dto/despesa-fixa.dto';

@Injectable()
export class DespesesFixesAssemblerService {

    public static mapDTOToEntity(dto: Partial<DespesaFixaDTO>): DespesaFixa {
        const entity = new DespesaFixa();
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: DespesaFixa): DespesaFixaDTO {
        const dto = new DespesaFixaDTO();
        dto.descripcio = entity.descripcio;
        dto.import = entity.import;
        dto.mesInici = entity.mesInici;
        dto.mesFi = entity.mesFi;
        dto.id = dto.id;
        // Una manera JS 2018 de fer el mateix.
        //const {dataInsercio, ...dto} = entity;
        return dto;
    }
}
