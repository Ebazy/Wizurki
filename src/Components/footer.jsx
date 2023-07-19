import { AppBar, Box, Toolbar, IconButton } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ height: 80, display: 'flex' }}>
                <Toolbar sx={{ backgroundColor: "purple", justifyContent: "space-between", alignItems: 'center', height: 80 }}>
                    <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <h2
                            color="inherit"
                            style={{ margin: 10, justifyContent: 'center', alignItems: 'center', fontWeight: 500, fontSize: '2rem' }}
                        >
                            Wizurki
                        </h2>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', height: 80, justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <a href="https://booksy.com/pl-pl/139457_manifest-studio_paznokcie_3_warszawa" target="_blank" rel="noopener noreferrer">
                            <img src={'../../public/assets/logotypy-300x300.jpg'} style={{ width: 50, height: 50, marginLeft: 10, display: 'flex', justifyContent: 'end'}}/>
                            </a>
                            <a href="https://www.instagram.com/wizurki/" target="_blank" rel="noopener noreferrer">
                                <img src={'../../public/assets/logo-instagram-png-13560.png'} style={{ width: 50, height: 50, marginLeft: 10, display: 'flex', justifyContent: 'end'}}/>
                            </a>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Footer;