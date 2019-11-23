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
          <h1>Manage and Deploy <br/> Services</h1>
          <p>With Lightainer you can easily maintain, monitor <br/>and configure your server.</p>
          <button className="button">Get started</button>
        </div>
      </div>
      <div className="cards">
          <div className="card primary shadow">
            <h1>Demo</h1>
            <p>Check out Lightainer in our Demo</p>
            <button className="button">Demo</button>
          </div>
          <div className="card dark shadow">
            <h1>Modules</h1>
            <p>Take a look in our Marketplace to <br/>check out other Modules you <br/>can use with Lightainer</p>
            <button className="button">Marketplace</button>
          </div>
          <div className="card secondary shadow">
            <h1>Support</h1>
            <p>You got a problem with<br/>Lightainer? Create a Issue<br/>on Github an we can help</p>
            <button className="button">Issues</button>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
