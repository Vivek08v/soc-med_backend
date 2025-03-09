class ApiError extends Error{
    constructor(
        statusCode,
        message="Something Went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = success
        this.errors = errors 

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}