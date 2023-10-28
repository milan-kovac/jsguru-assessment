export function isNil(value: unknown): boolean {
    return value === undefined || value === null;
}

export function isObject(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object';
}

export function isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
}

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export function isEmpty(value: unknown): boolean {
    if (isNil(value)) {
        return true;
    }
    if (isArray(value)) {
        return (value as Array<unknown>).length === 0;
    }
    if (isString(value)) {
        return (value as string).length === 0;
    }
    if (isObject(value)) {
        return Object.keys(value).length === 0;
    }
    return false;
}
