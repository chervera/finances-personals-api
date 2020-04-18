import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class DespesaFixaDTO {
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    import: number;

    @ApiProperty()
    @IsNotEmpty()
    descripcio: string;

    @ApiPropertyOptional()
    mesInici: number;

    @ApiPropertyOptional()
    mesFi: number;
}