import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class RegisterDto {
    @IsEmail({}, { message: 'Please provide valid email.' })
    email: string;

    @IsString({ message: 'Please provide valid password.' })
    password: string;

    @IsString({ message: 'Please provide valid first name.' })
    firstName: string;

    @IsString({ message: 'Please provide valid last name.' })
    lastName: string;

    @IsPhoneNumber(null, { message: 'Please provide valid phone.' })
    phone: string;
}
