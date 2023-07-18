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
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: "purple", justifyContent: "space-between" }}>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, fontSize: '3rem'}}
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
                                <Button color="inherit">Cennik</Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button color="inherit">Kontakt</Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button color="inherit">Zdjęcia prac</Button>
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
                        <Button sx={{ mr: 2, border: "2px solid black", borderRadius: 3, fontSize: '1' }} color="inherit">
                            Cennik
                        </Button>
                        <Button sx={{ mr: 2, border: "2px solid black", borderRadius: 3, fontSize: '1' }} color="inherit">
                            Kontakt
                        </Button>
                        <Button sx={{ mr: 2, border: "2px solid black", borderRadius: 3, fontSize: '1' }} color="inherit">
                            Zdjęcia prac
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;