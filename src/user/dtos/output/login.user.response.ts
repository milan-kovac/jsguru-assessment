import { GenericResponse } from 'src/shared/dtos/response.dto';
import { ApiResponseProperty } from '@nestjs/swagger';

class TokenResoinse {
    @ApiResponseProperty({
        type: String
    })
    token: string;
}

export class LoginUserResponseDto extends GenericResponse<TokenResoinse> {
    @ApiResponseProperty({
        type: TokenResoinse
    })
    data: TokenResoinse;
}
