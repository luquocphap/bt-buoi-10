import { statusCodes } from "./status-code.helper.js"

export const responseSuccess = (data, message="success", statusCode=200) => {
    return {
        status: "success",
        statusCode: statusCode,
        message: message,
        data: data,
        doc: "swagger.com"
    }
}

export const responseError = (message="fail", statusCode=500, stack) => {
    return {
        status: "error",
        statusCode: statusCode,
        message: message,
        stack: stack,
        doc: "swagger.com"
    }
}