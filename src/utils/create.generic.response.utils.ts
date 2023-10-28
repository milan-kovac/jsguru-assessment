import { GenericResponse, ResponseErrorDto } from 'src/shared/dtos/response.dto';
import { isEmpty } from './global.utils';

export function createGenericResponse<T>(data: T | null, errors: ResponseErrorDto[] = [], code = 200): GenericResponse<T> {
    return {
        code,
        data,
        success: isEmpty(errors),
        errors
    };
}
