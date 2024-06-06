import AppError from "./AppError";

class ComponentLoadError extends AppError {
    constructor(componentName: string) {
        super(componentName + " could not be loaded");
    }
}

export default ComponentLoadError;