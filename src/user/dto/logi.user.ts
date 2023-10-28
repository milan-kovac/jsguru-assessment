import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Please provide valid email.' })
    email: string;

    @IsString({ message: 'Please provide valid password.' })
    password: string;
}
