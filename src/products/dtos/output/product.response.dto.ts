import { ApiResponseProperty } from '@nestjs/swagger';
import { UserResponseDto } from 'src/user/dtos/output/user.response.dto';

export class ProductResponseDto {
    @ApiResponseProperty({ type: String })
    id: string;

    @ApiResponseProperty({ type: String })
    name: string;

    @ApiResponseProperty({ type: String })
    description: string;

    @ApiResponseProperty({ type: Number })
    price: number;

    @ApiResponseProperty({ type: Number })
    quantity: number;

    @ApiResponseProperty({ type: UserResponseDto })
    user?: UserResponseDto;
}
