import { GenericResponse } from 'src/shared/dtos/response.dto';
import { ApiResponseProperty } from '@nestjs/swagger';
import { UserResponseDto } from './user.response.dto';
export class RegisterUserResponseDto extends GenericResponse<UserResponseDto> {
    @ApiResponseProperty({
        type: UserResponseDto
    })
    data: UserResponseDto;
}
