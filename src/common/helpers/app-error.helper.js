import { responseError } from "./reponse.helper.js"

export const appError = (err, req, res, next) => {
    console.log({
        cause: err?.cause,
        message: err?.message,
        name: err?.name,
        stack: err?.stack,
        code: err?.code
    })

    const response = responseError(err.message, err.code, err.stack);
    res.status(err.code).json(response);
}