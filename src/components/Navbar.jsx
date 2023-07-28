import { useState} from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import {
    navbarBox, navbarButtonBox,
    navbarHamburgerMenuBox, navbarHamburgerMenuContactButton, navbarHamburgerMenuIconButton, navbarHamburgerMenuLink,
    navbarIconButton, navbarLinkButtonBox, navbarPhotoButton, navbarPriceButton, navbarSecondBox,
    navbarToolBar,
    navbarToolBarBox
} from "./PhotoListStyle.js";



function Navbar() {


    const [mixin, setMixin] = useState(null);

    const handleClick = (event) => {
        setMixin(event.currentTarget);
    };

    const handleClose = () => {
        setMixin(null);
    };


    return (
        <Box
            sx={navbarBox}>
            <AppBar
                position="static">
                <Toolbar
                    sx={navbarToolBar}
                >
                    <Box
                        sx={navbarToolBarBox}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={navbarHamburgerMenuIconButton}
                        >
                            Wizurki
                        </IconButton>
                    </Box>
                    <Box
                        sx={navbarHamburgerMenuBox}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={navbarIconButton}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={mixin}
                            open={Boolean(mixin)}
                            onClose={handleClose}
                        >
                            <MenuItem >
                                <Link
                                    to="cennik"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                >
                                <Button
                                    color="inherit"
                                    onClick={handleClose}
                                >
                                    Cennik
                                </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                    <Button
                                        onClick={handleClose}
                                        color="inherit"
                                        sx={navbarHamburgerMenuContactButton}
                                    >
                                        <a
                                            href="https://booksy.com/pl-pl/139457_manifest-studio_paznokcie_3_warszawa"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                        style={navbarHamburgerMenuLink}
                                        >
                                            Kontakt
                                        </a>
                                    </Button>
                            </MenuItem>
                            <MenuItem >
                                <Link
                                    to="photo_list"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                >
                                <Button
                                    color="inherit"
                                    onClick={handleClose}
                                >
                                    Zdjęcia prac
                                </Button>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box
                        sx={navbarSecondBox}
                    >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={navbarIconButton}
                    >
                        Wizurki
                    </IconButton>
                    </Box>
                    <Box sx={navbarButtonBox}
                    >
                        <Link
                            to="cennik"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                        >
                        <Button
                            sx={navbarPriceButton}
                            color="inherit"
                        >
                            Cennik
                        </Button>
                        </Link>
                        <a
                            href="https://booksy.com/pl-pl/139457_manifest-studio_paznokcie_3_warszawa"
                            target="_blank"
                            rel="noopener noreferrer"
                           style={navbarHamburgerMenuLink}
                        >
                        <Button
                            sx={navbarLinkButtonBox}
                            color="inherit"
                        >
                            Kontakt
                        </Button>
                        </a>
                        <Link
                            to="photo_list"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                        >
                        <Button
                            sx={navbarPhotoButton}
                            color="inherit"
                        >
                            Zdjęcia prac
                        </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;