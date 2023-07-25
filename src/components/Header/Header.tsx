import "./Header.css";
import Logo from "../../assets/logo.svg";
import { Button, Drawer, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import React from "react";
import SideNav from "../SideNav/SideNav";
import { Link } from "react-router-dom";

const Header = () => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (side: string, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [side]: open });

      };

  return (
    <header className="header">
      <div className="logo">
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="search-container">
        <TextField
          id="search"
          className="search-box"
          placeholder="Search Tossed - St Martin's Lane"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color='disabled' />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="auth-button">
        <Button disableRipple variant="outlined" startIcon={<HomeOutlinedIcon />}>Sign up or login</Button>
      </div>
      <div className="menu-button">
        <Button disableRipple variant="outlined" startIcon={<MenuIcon />} onClick={toggleDrawer('right', true)}>Menu</Button>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          <SideNav close={toggleDrawer('right', false)} />
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
