import { ApiResponseProperty } from '@nestjs/swagger';
export class UserResponseDto {
    @ApiResponseProperty({ type: String })
    id: string;

    @ApiResponseProperty({ type: String })
    firstName: string;

    @ApiResponseProperty({ type: String })
    lastName: string;

    @ApiResponseProperty({ type: String })
    email: string;

    @ApiResponseProperty({ type: String })
    phone: string;
}
