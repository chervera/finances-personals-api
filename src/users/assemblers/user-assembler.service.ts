import { Injectable } from '@nestjs/common';
import { User } from 'src/users/domain/user.entity';
import { UserDTO } from 'src/auth/dto/user.dto';
import { ProfileDTO } from '../dto/profile.dto';


@Injectable()
export class UserAssemblerService {

    public static mapDTOToEntity(dto: Partial<ProfileDTO>, userId: number, entity?: User): User {
        if (!entity) {
            entity = new User();
        }
        return { ...entity, ...dto };

    }

    public static mapEntityToDTO(entity: User): ProfileDTO {
        const { id, dataInsercio, password, ...dto } = entity;
        return dto;
    }
}
