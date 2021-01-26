import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/"><h1 className="title">LEE JI SEON</h1></Link>
      <div className="menu">
        <Link to="/animations"><div className="menu-item">Animations</div></Link>
        <Link to="/illustrations"><div className="menu-item">Illustrations</div></Link>
        <Link to="/infographics"><div className="menu-item">Infographics</div></Link>
        <Link to="/about"><div className="menu-item">About</div></Link>
      </div>
    </nav>
  );
}

export default Nav;
