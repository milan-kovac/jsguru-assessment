import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
    @ApiProperty({ required: true })
    @IsEmail({}, { message: 'Please provide valid email.' })
    email: string;

    @ApiProperty({ required: true })
    @IsString({ message: 'Please provide valid password.' })
    password: string;
}
