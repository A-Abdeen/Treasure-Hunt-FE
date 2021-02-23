import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { signout } from "../store/actions/authActions.js";
// Styling
import { NavStyled, NavYard } from "../styles.js";
// import Logo from "../TH-Logo.png";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const hamza = (signout) => {
    dispatch(signout());
    <Redirect to="/" />;
  };
  return (
    <NavStyled className="navbar navbar-expand">
      {/* <Logo className="navbar-brand" to="/">
        <img src={Logo} alt="logo" />
      </Logo> */}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {!user ? (
            <>
              <NavYard className="nav-item nav" to="/signin">
                Sign-in
              </NavYard>
              <NavYard className="nav-item nav" to="/signup">
                Signup
              </NavYard>
            </>
          ) : (
            ""
          )}
          {user ? <button onClick={() => hamza(signout)}>SignOut</button> : ""}
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
