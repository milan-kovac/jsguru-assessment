import { GenericResponse } from 'src/shared/dtos/response.dto';
import { ApiResponseProperty } from '@nestjs/swagger';
import { ProductResponseDto } from './product.response.dto';
export class CreateProductResponseDto extends GenericResponse<ProductResponseDto> {
    @ApiResponseProperty({
        type: ProductResponseDto
    })
    data: ProductResponseDto;
}
