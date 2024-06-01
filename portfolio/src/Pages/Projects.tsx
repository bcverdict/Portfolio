import './Page.css'
import {ElementFactory} from "../Factories/ElementFactory";
import AppError from "../Errors/AppError";

const Projects = async () => {
    let ProjectsContent = ElementFactory.CreateEmptyElement();

    try {
        ProjectsContent = await ElementFactory.CreateProjectCardListElement();
    } catch (err) {
        if(err instanceof AppError) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    }
    return (
        <div className={"Page"}>
            {ProjectsContent}
        </div>
    );
}

export default Projects;