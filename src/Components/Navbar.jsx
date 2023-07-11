import { useState } from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [mixin, setMixin] = useState(null);

    const handleClick = (event) => {
        setMixin(event.currentTarget);
    };

    const handleClose = () => {
        setMixin(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar sx={{ backgroundColor: "purple", justifyContent: "space-between" }}>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            Wizurki
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={mixin}
                            open={Boolean(mixin)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Button color="inherit">Cumkulator</Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button color="inherit">O mn</Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button color="inherit">Zdjęcia UwU</Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        Wizurki
                    </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <Button sx={{ mr: 4, border: "2px solid black", borderRadius: 3 }} color="inherit">
                            Cumkulator
                        </Button>
                        <Button sx={{ mr: 4, border: "2px solid black", borderRadius: 3 }} color="inherit">
                            O mn
                        </Button>
                        <Button sx={{ mr: 4, border: "2px solid black", borderRadius: 3 }} color="inherit">
                            Zdjęcia UwU
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;