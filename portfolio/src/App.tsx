import React from 'react';
import './App.css';

import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import MyProjectDataWrapper from "./Wrappers/ProjectDataWrapper/MyProjectDataWrapper";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          {ProjectCardList(MyProjectDataWrapper)}
      </header>
    </div>
  );
}

export default App;
