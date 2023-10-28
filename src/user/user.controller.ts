import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dtos/input/register.user.dto';
import { LoginDto } from './dtos/input/logi.user';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { createGenericResponse } from 'src/utils/create.generic.response.utils';
import { GenericResponse } from 'src/shared/dtos/response.dto';
import { RegisterUserResponseDto } from './dtos/output/register.user.response.dto';
import { LoginUserResponseDto } from './dtos/output/login.user.response';
@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({
        summary: 'Register user'
    })
    @ApiBody({ type: RegisterDto })
    @ApiResponse({ type: RegisterUserResponseDto })
    @Post('register')
    async register(@Body() registerRequest: RegisterDto): Promise<GenericResponse> {
        const user = await this.userService.register(registerRequest);
        return createGenericResponse(user);
    }

    @ApiOperation({
        summary: 'Login user',
        description: 'Returns a JWT token'
    })
    @ApiBody({ type: LoginDto })
    @ApiResponse({ type: LoginUserResponseDto })
    @Post('login')
    async login(@Body() loginRequest: LoginDto): Promise<GenericResponse> {
        const token = await this.userService.login(loginRequest);
        return createGenericResponse({ token });
    }
}
