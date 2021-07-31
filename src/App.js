import React from 'react';
import './styles/App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Breeds from "./components/Breeds";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          HEADING WEBSITE
          <hr />
          <Link to={{
            pathname:'/'
              }}>Home</Link> -
          <Link to={{
            pathname:'/about'
              }}>About</Link> - 
          <Link to={{
            pathname:'/breeds'
              }}>Breeds</Link> - 
        </header>
        <hr />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/breeds" component={Breeds}/>
      </BrowserRouter>
    </>
  );
}

export default App;
