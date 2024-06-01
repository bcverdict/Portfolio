import React, { useEffect, useState } from 'react';
import './App.css';
import ElementFactory from "./Factories/ElementFactory";
import AppError from "./Errors/AppError";

const App: React.FC = () => {
    const [headerContent, setHeaderContent] = useState<JSX.Element>(ElementFactory.CreateEmptyElement());
    const [projectsContent, setProjectsContent] = useState<JSX.Element>(ElementFactory.CreateEmptyElement());
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const headerElement = await ElementFactory.CreateHeaderElement();
                const projectCardListElement = await ElementFactory.CreateProjectCardListElement();
                setHeaderContent(headerElement);
                setProjectsContent(projectCardListElement);
            } catch (err) {
                if (err instanceof AppError) {
                    console.error(err.message);
                    setError(err.message);
                } else {
                    console.error(err);
                    setError('An unexpected error occurred');
                }
            }
        };

        fetchElements();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {error ? <div className="error">{error}</div> : null}
                {headerContent}
                {projectsContent}
            </header>
        </div>
    );
}

export default App;
