import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WestIcon from "@mui/icons-material/West";
import { Box, Typography } from "@mui/joy";
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DashNavbar.css";
import { Avatar, Tooltip } from "@material-ui/core";

const DashNavbar = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [favorite, setFavorite] = useState([]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  // handle favorite product list
  const handleFarorite = (event) => {
    navigate("/saved-property");
  };

  // navigate to add property
  const handleGetForm = (event) => {
    navigate("/add-property");
  };

  // back to parant page
  const goBack = () => {
    navigate(-1);
  };

  // handle open account menu
  const handleAccount = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // handle close account menu
  const handleClose = (goto) => {
    if (goto === "profile") {
      navigate("/profile");
    }
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
          // borderBottom: "1px solid rgba(240, 240, 240, 1)",
        }}
      >
        <Toolbar style={{ minHeight: 55, justifyContent: "flex-end" }}>
          <Typography
            className="header_title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={goBack}
            style={{ cursor: "pointer" }}
          >
            <WestIcon />
            {/* Property List */}
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleGetForm}
            color="inherit"
            className="add_property_icon"
          >
            <AddCircleIcon className="nav_icon " />
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleFarorite}
            color="inherit"
          >
            <FavoriteIcon className="nav_icon" />
          </IconButton>
          {auth && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleAccount} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    style={{ width: 25, height: 25 }}
                    src=""
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClose("profile")}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}

          {/* <Link
            to="/add-property"
            className="btn btn-primary px-3 d-none d-lg-flex mx-3"
          >
            Add Property
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashNavbar;
