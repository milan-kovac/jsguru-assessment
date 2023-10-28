import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { RegisterDto } from './dto/register.user.dto';
import { SuccessfulResponse } from 'src/shared/response/successful.response';
import { LoginDto } from './dto/logi.user';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Res() res: Response, @Body() registerRequest: RegisterDto): Promise<void> {
        await this.userService.register(registerRequest);
        new SuccessfulResponse(res, 'User successfully registered.');
    }

    @Post('login')
    async login(@Res() res: Response, @Body() loginRequest: LoginDto): Promise<void> {
        const token = await this.userService.login(loginRequest);
        new SuccessfulResponse(res, 'Login successful.', { token });
    }
}
