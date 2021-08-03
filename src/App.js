import React from 'react';
import './styles/App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header';
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Breeds from "./components/Breeds";
import BreedItem from "./components/BreedItem"

const App = () => {
  return (
    <>
      <BrowserRouter>  
        <Header />      
        <div className="container">
          <Switch>
            {/* <Redirect from="/profile" to="/"/> */}
            <Route path="/breeds/:name"  component={BreedItem}/>
            <Route path="/breeds"  component={Breeds}/>
            <Route path="/profile"  component={Profile}/>
            <Route path="/about"  component={About}/>            
            <Route path="/" exact component={Home}/>
            <Route render={()=>(
              <h3>Ooops page not found !!</h3>
            )}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;
