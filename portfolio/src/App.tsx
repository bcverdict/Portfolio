import React, { useEffect, useState } from 'react';
import './App.css';
import ElementFactory from "./Factories/ElementFactory";
import AppError from "./Errors/AppError";
import Projects from "./Pages/Projects/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./Pages/Contact/Contact";

const App = () => {
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
            {headerContent}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Projects/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
