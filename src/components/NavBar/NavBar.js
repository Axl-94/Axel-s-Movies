import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom-black border-black" style={{paddingLeft:"0rem"}}>
      <div className="container border-black"  style={{alignItems:"start", marginLeft:"0.1px"}}>
        <a className="navbar-brand" href="/" style={{alignSelf:"flex-start"}}>
        <i class="fas fa-film" ></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;