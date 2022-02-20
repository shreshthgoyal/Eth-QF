import './Navbar.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =({isMatchingRound}) => {

const [click, setClick] = React.useState(false);

const handleClick = () => setClick(!click);
const Close = () => setClick(false);

return (
  <div>
      <header id="header" className="header">
  <div className="header__container container container--px">
   <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
    <nav className="navbar" onClick={e => e.stopPropagation()}>
      <div className="nav-container">
        <NavLink exact="true" to="/" className="nav-logo">
          ETH QF   
          <i className="fab fa-ethereum log"></i>
          {isMatchingRound && <div className="round-indicator">Matching Round is LIVE</div>}
        </NavLink>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/sponsor"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Sponsor
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/projects"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/sponsor"
              activeclassname="active"
              className="nav-links"
             onClick={click ? handleClick : null}
            >
              Contribute
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
    <div id="overlayLayer" className="header__overlay"></div>
  </div>
</header>
  </ div>
);
}

export default Navbar;