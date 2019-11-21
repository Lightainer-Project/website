import React from 'react';
import { Fragment } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <div className="navigation">
        <div className="container">
          <a href="/website">
            <img src="logo512.png" alt="Logo"></img>
          </a>
          <h1>LIGHTAINER</h1>
          <nav>
            <ul>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="https://github.com/Lightainer-Project/Lightainer">Github</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header">
        <div className="container">
        </div>
      </div>
    </Fragment>
  );
}

export default App;
