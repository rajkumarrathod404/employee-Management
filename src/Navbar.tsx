import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MemoryIcon from "@mui/icons-material/Memory";

const pages = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <MemoryIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3}}/> */}
<svg style={{width: "34px",height: "1opx",fill: "currentColor",overflow: "hidden"}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M464.96 535.28c-147.6 0-267.6-120.08-267.6-267.6S317.36 0 464.96 0c147.6 0 267.6 120.08 267.6 267.6s-120 267.68-267.6 267.68z m0-454.08c-102.8 0-186.48 83.68-186.48 186.48 0 102.8 83.68 186.48 186.48 186.48s186.48-83.68 186.48-186.48c0-102.88-83.68-186.48-186.48-186.48z"  /><path d="M464.96 1024H126.16c-49.52 0-78.16-18.88-93.52-34.64-28.32-29.2-29.76-65.6-29.68-73.36 0.08-254.64 207.28-461.84 462-461.84a40.56 40.56 0 0 1 0 81.12c-210 0-380.8 170.8-380.8 380.8v0.48c0.56 17.44 14.64 26.32 42 26.32h338.8a40.56 40.56 0 0 1 0 81.12zM747.44 865.28c-56.32 0-102.16-45.84-102.16-102.16 0-56.32 45.84-102.16 102.16-102.16 56.32 0 102.16 45.84 102.16 102.16 0 56.32-45.84 102.16-102.16 102.16z m0-123.12c-11.52 0-20.96 9.44-20.96 20.96s9.44 20.96 20.96 20.96 20.96-9.44 20.96-20.96-9.36-20.96-20.96-20.96z"  /><path d="M680.48 1024c-5.52 0-11.04-0.64-16.72-1.92-5.84-1.28-11.28-2.56-73.12-37.2l-2.96-1.68-2.64-2.08c-24.88-20-35.44-53.12-27.12-83.68 0.32-2 0.72-4 1.12-6 0.32-1.6 0.72-3.36 0.96-4.96-0.24-5.28-3.2-8-8.8-8h-2.8c-30.8 0-58.72-23.76-66.96-56.16-4.08-10.8-7.52-28.64-7.52-59.28 0-19.36 3.52-38.08 5.36-48.08 0.08-0.56 0.24-1.04 0.32-1.52v-0.56l0.64-3.6c6.32-35.12 35.68-61.6 68.16-61.6h0.96c2.08 0.24 4.16-0.8 5.6-2.24a8 8 0 0 0 2.24-5.6v-1.04c0-1.2-0.56-4.24-1.12-6.56-10.4-31.36 0.4-67.12 26.64-87.6l3.76-2.64 46.64-28.48c6.8-5.04 19.92-11.36 46.48-11.36h1.36c19.44 0.64 37.6 8.08 51.84 20.96 2.32 1.52 4.72 3.12 7.12 4.72 2.16 1.44 5.36 3.6 8.24 5.44 2.56-1.76 5.28-3.84 7.2-5.44 13.36-16.08 32.96-25.2 55.92-25.76 22.56-1.68 54.96 10.88 96.32 37.52l3.44 2.48c25.04 20.08 35.6 53.28 27.2 83.92-0.32 2-0.72 4-1.2 6.08-0.32 1.6-0.72 3.44-0.96 5.04 0 2 0.8 4 2.24 5.44 1.52 1.52 3.6 2.32 5.6 2.24h3.84c32.24 0 61.36 26.08 68.08 60.72 10 46.4 2.08 98.16 1.12 103.92-10.64 58.8-50.24 63.28-62.08 63.28h-2.8c-5.84 0-8.8 2.96-8.8 8.88 0 1.44 0.64 4.72 1.04 6.56 10.4 31.28-0.32 66.96-26.56 87.52l-2.56 2-60.8 33.36c-14.16 7.12-25.92 7.12-33.68 7.12-20.96 0-41.2-8.8-57.04-24.72l-2.24-2.24-1.84-2.56c-1.28-1.52-4.56-4.08-7.68-6.16-2.48 1.84-6 4.72-10.64 9.2-16 21.12-37.52 32.32-60.8 32.32z m-43.76-106.32c15.28 8.48 31.76 17.52 41.76 22.72l1.2-1.68 2.48-2.48c16.16-16.08 40.8-37.12 69.52-37.12 27.04 0 56 20.96 70.16 37.52l44.88-24.64-0.24-0.96c-0.96-3.6-4.24-16.24-4.24-29.2 0-45.52 32.08-82.08 75.36-88.88 1.68-12.8 4.16-42.96-0.32-67.04-21.04-1.6-41.12-10.72-56.16-25.76a89.24 89.24 0 0 1-26-64.64c0.08-7.28 1.6-14.4 2.64-19.68l0.24-1.04v-3.76l1.84-5.44c-27.28-17.12-41.12-21.12-44.88-22l-0.56 0.64c-1.36 1.36-33.28 33.2-65.52 33.2-21.84 0-40.64-12.8-54.4-22.08-2.48-1.76-4.64-3.36-6.48-4.4l-5.28-2.96-4.16-4.4c-1.36 0.08-2.96 0.16-4.4 0.32l-40.32 24.64 0.32 1.04c0.96 3.52 4.24 16 4.32 28.88 0.48 24-8.96 47.52-25.92 64.56a89.24 89.24 0 0 1-53.04 25.52c-0.08 0.56-0.16 1.12-0.32 1.68-1.36 7.44-4 21.36-4 33.12 0 9.12 0.8 19.12 1.68 25.76l1.12 1.12 1.36 7.76c46.56 3.92 82 41.92 82 89.68 0 7.28-1.36 14.32-2.48 19.92l-0.24 1.28v3.92l-1.92 4.88z m1.76-11.84v0zM479.6 715.92v0.72-0.72z m378.4-98.32v0.16-0.16z m-187.04-33.36z m141.84-0.64z"  /></svg>
          {/* <img src="../assets/favicon.svg" alt="company logo" /> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
