import React, { useEffect, useState } from 'react';
import './App.css';
import ElementFactory from "./Factories/ElementFactory";
import AppError from "./Errors/AppError";
import Projects from "./Pages/Projects";

const App: React.FC = () => {
    const [headerContent, setHeaderContent] = useState<JSX.Element>(ElementFactory.CreateEmptyElement());

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const headerElement = await ElementFactory.CreateHeaderElement();
                setHeaderContent(headerElement);
            } catch (err) {
                if (err instanceof AppError) {
                    console.error(err.message);
                } else {
                    console.error(err);
                }
            }
        };

        fetchElements();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {headerContent}
                {Projects()}
            </header>
        </div>
    );
}

export default App;
