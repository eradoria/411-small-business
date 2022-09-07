import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Lubbock Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/add">Add</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/login">Log Out</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navigation;
