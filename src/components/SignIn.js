import { signIn } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PasswordMask from "react-password-mask";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(user, history));
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1> Sign In</h1>
      <div className="mb-3">
        <label className="form-label">username</label>
        <input
          type="text"
          value={user.username}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>

      <PasswordMask
        name="password"
        placeholder="Enter password"
        value={user.password}
        onChange={handleChange}
      />

      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Sign in
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"WELCOME"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              THE HUNT IS ON
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button type="submit" onClick={handleClose} color="primary">
              Ok
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </form>
  );
};

export default SignIn;
