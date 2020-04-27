import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class MasterDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    descripcio: string;
}