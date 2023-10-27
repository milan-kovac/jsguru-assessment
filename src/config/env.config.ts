import * as dotenv from 'dotenv';
import * as path from 'path';

export function getEnvString(): string {
    return `.${process.env.NODE_ENV || 'dev'}.env`;
}

dotenv.config({
    path: path.resolve(process.cwd(), getEnvString())
});

export default dotenv;
