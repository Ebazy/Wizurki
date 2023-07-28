import { AppBar, Box, Toolbar } from '@mui/material';
import {
    footerAppBox,
    footerBox,
    footerLogoString, footerPic,
    footerPicBox,
    footerToolBox,
    footerToolBoxLogo
} from "./PhotoListStyle.js";

function Footer() {
    return (
        <Box
            sx={footerBox}
        >
            <AppBar
                position='static'
                sx={footerAppBox}
            >
                <Toolbar
                    sx={footerToolBox}
                >
                    <Box
                        sx={footerToolBoxLogo}
                    >
                        <h2
                            color='inherit'
                            style={footerLogoString}
                        >
                            Wizurki
                        </h2>
                    </Box>
                    <Box
                        sx={footerPicBox}
                    >
                            <a
                                href="https://booksy.com/pl-pl/139457_manifest-studio_paznokcie_3_warszawa"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <img
                                src={'/assets/logotypy-300x300.jpg'}
                                style={footerPic}
                            />
                            </a>
                            <a
                                href="https://www.instagram.com/wizurki/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={'/assets/logo-instagram-png-13560.png'}
                                    style={footerPic}
                                />
                            </a>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Footer;