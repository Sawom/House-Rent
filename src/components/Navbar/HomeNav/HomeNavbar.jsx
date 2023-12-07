import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Menu, MenuItem } from "@mui/joy";
import { IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/icon-deal.png";
import "./HomeNavbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the clicked element is not part of the navbar
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        // Collapse the navbar if it is not already collapsed
        const navbarCollapse = document.getElementById("navbarCollapse");
        if (navbarCollapse.classList.contains("show")) {
          document.getElementById("navbarToggleBtn").click();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`container-fluid nav-bar ${
        isSticky ? "sticky-top" : ""
      } bg-transparent`}
    >
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src={logoImg}
              alt="Icon"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <h1 className="m-0 text-primary">House Rent</h1>
        </Link>
        <button
          ref={navbarRef}
          id="navbarToggleBtn"
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/dashboard" className="nav-item nav-link">
              Dashboard
            </Link>
            <Link to="/profile" className="nav-item nav-link">
              Profile
            </Link>
            {/* <Link to="/dashboard" className="nav-item nav-link">
              Logout
            </Link> */}
            <Link to="/login" className="nav-item nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-item nav-link">
              Signup
            </Link>
          </div>
          <Link
            to="/add-property"
            className="btn btn-primary px-3 d-none d-lg-flex"
          >
            Add Property
          </Link>
          {/* <div style={{ position: "relative" }}>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              style={{ zIndex: 9999999 }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to={"/dashboard"}>Dashboard</Link>{" "}
              </MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
