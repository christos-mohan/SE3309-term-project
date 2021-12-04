import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

class App extends Component {
  
  state = {
    token: null,
    userID: null,
  };
  
  
  
  
  render () {
    return (
      <div className="wrapper">
        <h1>Application</h1>

        <div ClassName="login-wrapper">
          <h3>Please log in </h3>
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>

            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>

        <div className="menu">
          <ul>
            <li> <a href ="/preferences">Preferences</a> </li>
          </ul>
        </div>


        <BrowserRouter>
          <React.Fragment>

              <Routes>
                <Route path ="/preferences" component={Preferences}/>
              </Routes>

          </React.Fragment>
        </BrowserRouter>

        
      </div>



    );
  }
}

export default App;