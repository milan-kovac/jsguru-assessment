import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';
export class CreateProductDto {
    @ApiProperty({ required: true })
    @IsString({ message: 'Please provide valid name.' })
    name: string;

    @ApiProperty({ required: true })
    @IsString({ message: 'Please provide valid decsription.' })
    description: string;

    @ApiProperty({ required: true })
    @IsNumber({}, { message: 'Please provide valid price.' })
    @Min(0)
    price: number;

    @ApiProperty({ required: true })
    @IsNumber({}, { message: 'Please provide valid quantity.' })
    @Min(0)
    quantity: number;
}
