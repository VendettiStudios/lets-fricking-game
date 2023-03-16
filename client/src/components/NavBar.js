import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem } from '@mui/material';

import { Image } from 'mui-image';
import navbarLogo from './../images/dashboard-logo-lfg-white.png';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Current Team', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        Auth.logout();
        setAnchorElUser(null);
        window.location.href = "/";
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Link to='/'><Image
                        src={navbarLogo}
                        height="73.72px"
                        width="285.94px"
                        fit='contain'
                        duration={900}
                        easing=
                        'cubic-bezier(0.7, 0, 0.6, 1)'
                        showLoading=
                        {false}
                        errorIcon=
                        {true}
                        shift={null}
                        distance="100px"
                        shiftDuration={90}
                        bgColor="inherit"
                    />
                    </Link>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Menu">
                            <IconButton onClick={handleOpenUserMenu} sx={{ display: { xs: { p: 0 }, md: { pl: 15 } } }}>
                                <Avatar alt="Profile" />
                            </IconButton>
                        </Tooltip>

                        {Auth.loggedIn() ? (
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem>
                                    <Link to="/profile">  <Typography textAlign="center">Profile</Typography> </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/currentTeam">  <Typography textAlign="center">Current Team</Typography> </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/createTeam">  <Typography textAlign="center">Create Team</Typography> </Link>
                                </MenuItem>

                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Log Out</Typography>
                                </MenuItem>

                            </Menu>
                        ) : (
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem>
                                    <Link to="/signinup">  <Typography textAlign="center">Login/Signup</Typography> </Link>
                                </MenuItem>
                            </Menu>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;