const itemlistStyle = {m:0}

const listContainer = {

    display: 'flex',
    justifyContent: 'center',
    mt: 10,
    pb: 10
}

const listBox = {
    width: 900,
    height: 500,
    border: '2px solid purple',
    boxShadow: '0px 3px 3px -2px purple, 0px 3px 4px 0px purple, 0px 1px 8px 0px purple;',
    backgroundColor: '#cd5c5c',
    overflowY: 'scroll',
    scrollbarColor: 'purple pink',
    '&::-webkit-scrollbar': {
        width: '8px',
        backgroundColor: '#cd5c5c',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'purple',
        borderRadius: '4px',
    },
}

const listImageList = { cursor: 'pointer' }


const priceDivBox = {maxWidth: 1200}

const priceSelectItem = {color: 'white', fontSize: '1.1rem'}

const priceMenuItem = {fontSize: '1.15rem'}

const navbarBox = { flexGrow: 1 }

const navbarToolBar = {
    backgroundColor: "purple",
    justifyContent: "space-between"
}

const navbarToolBarBox = {
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center'
}

const navbarHamburgerMenuIconButton = { mr: 2, fontSize: '3rem'}

const navbarHamburgerMenuBox = {
    display: { xs: 'flex', sm: 'none' },
    alignItems: 'center' }

const navbarIconButton = { mr: 2 }

const navbarHamburgerMenuContactButton = {textDecoration: 'none'}

const navbarHamburgerMenuLink = {
    textDecoration: 'inherit',
    color: 'inherit'
}

const navbarSecondBox = {
    display: { xs: 'flex', sm: 'none' },
    alignItems: 'center'
}

const navbarButtonBox = {
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center'
}

const navbarPriceButton = {
    mr: 2,
    border: "2px solid black",
    borderRadius: 3,
    fontSize: '1'
}

const navbarLinkButtonBox = {
    mr: 2,
    border: "2px solid black",
    borderRadius: 3,
    fontSize: '1'
}

const navbarPhotoButton = {
    mr: 2,
    border: "2px solid black",
    borderRadius: 3,
    fontSize: '1'
}

const aboutmeContainer = {
    backgroundColor: 'transparent'
}

const aboutmePaper = {
    backgroundColor: 'transparent',
    boxShadow: '0px 5px 5px -3px purple, 0px 4px 5px 0px purple, 0px 2px 10px 0px purple;'
}

const aboutmeNoChangeImg = {
    width: '100%',
    height: '100%',
    float: 'left',
    marginRight: '1rem'
}

const aboutmeNoChangeBox = {
    padding: '1rem',
        color: 'white'
}

const aboutmeNoChangeTitle = {
    wordWrap: 'break-word',
    paddingBottom: 6
}

const aboutmeNoChangeText = {
    wordWrap: 'break-word',
    fontSize: '1.5rem'
}

const aboutmeChangeImg = {
    width: '100%',
    height: '100%'
}

const aboutmeChangeBox = {
    padding: '1rem',
    color: 'white'
}

const aboutmeChangeTitle = {
    wordWrap: 'break-word',
    fontSize: '2rem'
}

const aboutmeChangeText = {
    wordWrap: 'break-word',
    fontSize: '1.3rem'
}

const footerBox = {
    flexGrow: 1
}

const footerAppBox = {
    height: 80,
    display: 'flex'
}

const footerToolBox = {
    backgroundColor: 'purple',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80
}

const footerToolBoxLogo = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const footerLogoString = {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: '2rem'
}

const footerPicBox = {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center'
}

const footerPic = {
    width: 50,
    height: 50,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'end'
}

















export {footerPic}
export {footerPicBox}
export {footerLogoString}
export {footerToolBoxLogo}
export {footerToolBox}
export {footerAppBox}
export {footerBox}
export {aboutmeChangeText}
export {aboutmeChangeTitle}
export {aboutmeChangeBox}
export {aboutmeChangeImg}
export {aboutmeNoChangeText}
export {aboutmeNoChangeTitle}
export {aboutmeNoChangeBox}
export {aboutmeNoChangeImg}
export {aboutmePaper}
export {aboutmeContainer}
export {navbarPhotoButton}
export {navbarLinkButtonBox}
export {navbarHamburgerMenuIconButton}
export {navbarPriceButton}
export {navbarButtonBox}
export {navbarSecondBox}
export {navbarHamburgerMenuLink}
export {navbarHamburgerMenuContactButton}
export {navbarIconButton}
export {navbarHamburgerMenuBox}
export {navbarToolBarBox}
export {navbarToolBar}
export {navbarBox}
export {priceMenuItem}
export {priceSelectItem}
export {priceDivBox}
export {listImageList}
export {listBox}
export {itemlistStyle}
export {listContainer}