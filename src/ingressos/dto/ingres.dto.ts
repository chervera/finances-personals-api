import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class IngresDTO {
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    import: number;

    @ApiProperty()
    @IsNotEmpty()
    concepte: string;

    @ApiProperty()
    data: Date;

}