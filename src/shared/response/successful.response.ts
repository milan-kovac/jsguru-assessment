import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export class SuccessfulResponse {
    constructor(res: Response, message: string, payload: unknown = true, status: number = HttpStatus.OK) {
        res.status(status).json({
            status,
            message,
            payload
        });
    }
}
