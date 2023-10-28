import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CurrentUserGuard implements CanActivate {
    constructor(private userService: UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization ?? false;
        const token = authorization ? authorization.replace('Bearer ', '') : false;
        if (!token) {
            throw new ForbiddenException('Not a valid JWT token.');
        }
        request.user = await this.userService.validateAccessToken(token);
        return true;
    }
}
