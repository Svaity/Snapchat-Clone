import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture'
import Preview from './Preview'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <h1>Lets build snapchat</h1>
      <Router>
        <div className="app_body">
      <Switch>
      <Route exact path="/preview">
            <Preview />
          </Route>
          <Route exact path="/">
            <WebcamCapture />
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
