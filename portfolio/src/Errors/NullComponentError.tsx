import AppError from "./AppError";

class NullComponentError extends AppError {
    constructor(componentName: string) {
        super(componentName + " not found");
    }
}

export default NullComponentError;