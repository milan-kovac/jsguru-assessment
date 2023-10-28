import { ApiResponseProperty } from '@nestjs/swagger';

export class ResponseErrorDto {
    @ApiResponseProperty()
    message: string;

    @ApiResponseProperty()
    code?: number;

    @ApiResponseProperty()
    name?: string;

    @ApiResponseProperty()
    payload?: Record<string, unknown>;

    @ApiResponseProperty()
    requestId?: string;

    @ApiResponseProperty()
    correlationId?: string;
}

export class GenericResponse<T = unknown> {
    @ApiResponseProperty({
        example: 200,
        type: 'number'
    })
    code = 200;

    @ApiResponseProperty()
    success: boolean;

    @ApiResponseProperty({
        example: []
    })
    errors: ResponseErrorDto[] = [];

    @ApiResponseProperty()
    data: T = null;
}
export class SuccessDeterminationResponseDataDto {
    @ApiResponseProperty()
    success: boolean;
}

export class SuccessDeterminationResponseDto extends GenericResponse<SuccessDeterminationResponseDataDto> {
    @ApiResponseProperty({
        type: SuccessDeterminationResponseDataDto
    })
    data: SuccessDeterminationResponseDataDto;
}
