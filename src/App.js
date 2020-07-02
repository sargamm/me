import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Banner from './Banner.js';
import Projects from './Projects.js';
import Intro from'./Intro.js';
import Timeline from './Timeline'
import Interests from './Interests'

// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <h1 className="title"> ABOUT ME </h1>
      <Intro />
      <h1 className="title"> PROJECTS </h1>
      <Projects/>
      <h1 className="title"> LIFE SO FAR </h1>
      <Timeline/>
      <h1 className="title"> INTERESTS </h1>
      {/* <Interests /> */}
    </div>
  );
}

export default App;
