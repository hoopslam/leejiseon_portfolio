import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {

  return (
    <nav>
      <NavLink activeClassName="disabled" exact to="/"><h1 className="title">LEE JI SEON</h1></NavLink>
      <div className="menu">
        <NavLink activeClassName="active" exact to="/"><div className="menu-item">Animations</div></NavLink>
        <NavLink activeClassName="active" exact to="/illustrations"><div className="menu-item">Illustrations</div></NavLink>
        <NavLink activeClassName="active" exact to="/infographics"><div className="menu-item">Infographics</div></NavLink>
        <NavLink activeClassName="active" exact to="/about"><div className="menu-item">About</div></NavLink>
      </div>
    </nav>
  );
}

export default Nav;
