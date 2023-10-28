import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class RegisterDto {
    @ApiProperty({ required: true })
    @IsEmail({}, { message: 'Please provide valid email.' })
    email: string;

    @ApiProperty({ required: true })
    @IsString({ message: 'Please provide valid password.' })
    password: string;

    @ApiProperty({ required: true })
    @IsString({ message: 'Please provide valid first name.' })
    firstName: string;

    @ApiProperty({ required: true })
    @IsString({ message: 'Please provide valid last name.' })
    lastName: string;

    @ApiProperty({ required: true })
    @IsPhoneNumber(null, { message: 'Please provide valid phone.' })
    phone: string;
}
