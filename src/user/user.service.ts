import { BadRequestException, ConflictException, ForbiddenException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { RegisterDto } from './dto/register.user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/logi.user';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository, private jwtService: JwtService) {}

    async register(registerRequest: RegisterDto): Promise<void> {
        try {
            const { password } = registerRequest;
            const salt = await bcrypt.genSalt();
            registerRequest.password = await bcrypt.hash(password, salt);
            await this.userRepository.save(registerRequest);
        } catch (error) {
            Logger.error(JSON.stringify(error), error);
            if (error.code === '23505') {
                throw new ConflictException(`Email ${registerRequest.email} already exists.`);
            }
            throw new BadRequestException(error);
        }
    }

    async login(loginRequest: LoginDto): Promise<string> {
        const { email, password } = loginRequest;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new ForbiddenException('Email or password is incorrect.');
        }
        return this.jwtService.sign({ id: user.id });
    }
}
