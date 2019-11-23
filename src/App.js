import React from 'react';
import { Fragment } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <div id="nav" className="navigation">
        <div className="container">
          <a href="/website">
            <img src="logo512.png" alt="Logo"></img>
          </a>
          <h1>LIGHTAINER</h1>
          <nav>
            <ul>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="https://github.com/Lightainer-Project/Lightainer" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <h1>Manage and Deploy <br /> Services</h1>
          <p>With Lightainer you can easily maintain, monitor <br />and configure your server.</p>
          <a className="button" href="/documentation#getstarted">Get started</a>
        </div>
      </div>
      <div className="cards">
        <div className="card primary shadow">
          <h1>Demo</h1>
          <p>Check out Lightainer in our Demo</p>
          <a className="button" href="/demo" target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
        <div className="card dark shadow">
          <h1>Modules</h1>
          <p>Take a look in our Marketplace to <br />check out other Modules you <br />can use with Lightainer</p>
          <a className="button" href="/marketplace" target="_blank" rel="noopener noreferrer">Marketplace</a>
        </div>
        <div className="card secondary shadow">
          <h1>Support</h1>
          <p>You got a problem with<br />Lightainer? Create a Issue<br />on Github an we can help</p>
          <a className="button" href="https://github.com/Lightainer-Project/Lightainer/issues" target="_blank" rel="noopener noreferrer">Issues</a>
        </div>
      </div>
      <div className="showcase">
        <a href="http://frozencloud.de/" target="_blank" rel="noopener noreferrer"><img src="frozencloud.png" alt="frozencloud logo"/></a>
        <a href="https://kabema-consulting.de/" target="_blank" rel="noopener noreferrer"><img src="kabema.png" alt="kabema logo"/></a>
      </div>
      <div className="textbox dark">
        <h1></h1>
        <p></p>
      </div>
    </Fragment>
  );
}

export default App;
