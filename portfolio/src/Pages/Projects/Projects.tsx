import {ElementFactory} from "../../Factories/ElementFactory";
import AppError from "../../Errors/AppError";
import {useEffect, useState} from "react";

function Projects() {
    const [projectsContent, setProjectsContent] = useState<JSX.Element>(ElementFactory.CreateEmptyElement());

    useEffect(() => {
        const fetchElement = async () => {
            try {
                const projectCardListElement = await ElementFactory.CreateProjectCardListElement();

                if(projectCardListElement) setProjectsContent(projectCardListElement);

            } catch (err) {
                if(err instanceof AppError) {
                    console.error(err.message);
                } else {
                    console.error(err);
                }
            }
        }
        fetchElement();
    }, [])

    return (
        <div className={"Page"}>
            {projectsContent}
        </div>
    );
}

export default Projects;