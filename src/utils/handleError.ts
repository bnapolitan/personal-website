

export function handleError(error: any)
{
    console.log(error);
    throw new Error(error);
}

export function handleErrorCode(code: string, message: string)
{
    const errorMess = `${code} error: ${message}`;
    console.log(errorMess);
    throw new Error(errorMess);
}
