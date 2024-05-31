import AppError from "./AppError";

class NotFoundError extends AppError {
    constructor(message: string = "Data wrapper not found") {
        super(message);
    }
}

export default NotFoundError;