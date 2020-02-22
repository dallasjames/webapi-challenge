import React from 'react';
import './App.css';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Projects}/>
      <Route exact path='/:id' component={ProjectCard}/>
    </div>
  );
}

export default App;
