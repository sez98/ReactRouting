import React from 'react';
// import {Navbar, Nav, NavItem} from 'react-bootstrap';
// import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
         console.log(props);
  return (
    <>
         <header>
                  {/* <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                           <h5 className="my-0 mr-md-auto font-weight-normal">Snap International</h5>
                           <nav className="my-2 my-md-0 mr-md-3">
                                    <Link className="p-2 text-dark" to={{
                                    pathname:'/'
                                             }}>Home</Link> -
                                    <Link className="p-2 text-dark" to={{
                                    pathname:'/about'
                                             }}>About</Link> - 
                                    <Link className="p-2 text-dark" to={{
                                    pathname:'/breeds'
                                             }}>Breeds</Link> - 
                           </nav>
                  </div>  */}
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                           <NavLink className="navbar-brand" to="/">Snap International</NavLink>
                           <div className="navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                             <li className="nav-item active">
                                                      <NavLink className="nav-link" to={{pathname:'/profile'}}>Profile</NavLink>
                                             </li>
                                             <li className="nav-item">
                                                      <NavLink className="nav-link" to={{pathname:'/about'}}>About</NavLink>
                                             </li>
                                             <li className="nav-item">
                                                      <NavLink className="nav-link" to={{pathname:'/breeds'}}>Breeds</NavLink>
                                             </li>
                                    </ul>
                           </div>
                  </nav>
          
         </header>
    </>
  );
}

export default Header;
