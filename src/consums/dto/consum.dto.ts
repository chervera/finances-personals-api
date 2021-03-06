import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class ConsumDTO {
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    import: number;

    @ApiProperty()
    concepte: string;

    @ApiProperty()
    data: Date;

}