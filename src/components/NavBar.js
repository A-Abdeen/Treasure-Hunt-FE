import React from "react";

// Styling
import { NavStyled, NavYard } from "../styles.js";
// import Logo from "../TH-Logo.png";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand">
      {/* <Logo className="navbar-brand" to="/">
        <img src={Logo} alt="logo" />
      </Logo> */}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavYard className="nav-item nav" to="/treasures">
            Sign-in
          </NavYard>
          <NavYard className="nav-item nav" to="/things">
            Signup
          </NavYard>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
