import './App.css';
import DependencyManager from "./DependencyManager/DependencyManager";

function App() {
    const dependencyManager = DependencyManager();
    let HeaderContent = dependencyManager.EmptyElement;
    let ProjectsContent = dependencyManager.EmptyElement;

    try {
        HeaderContent = dependencyManager.HeaderElement;
        ProjectsContent = dependencyManager.ProjectCardListElement;
    } catch (err) {
        if(err instanceof dependencyManager.AppError) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                {HeaderContent}
                {ProjectsContent}
            </header>
        </div>
    );
}

export default App;
