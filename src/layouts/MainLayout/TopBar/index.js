import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';

import RenderMobileMenu from './Menus/RenderMobileMenu';
import RenderDesktopMenu from './Menus/RenderDesktopMenu';
import RenderOptionsMenu from './Menus/RenderOptionsMenu';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.black,
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));


const TopBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return(
        <>
            <AppBar
                className={classes.root}
            >
                <Toolbar>
                    <Link to='/'>
                        <Avatar src="images/logos/logo01.png"  className={classes.avatar} />
                    </Link> 
                    <SearchBar />
                    <div className={classes.grow} />
                    
                    {/* SHOW VERSION DESKTOP */}
                    <div className={classes.sectionDesktop}>
                        <RenderDesktopMenu 
                            menuId={menuId} 
                            handleProfileMenuOpen={handleProfileMenuOpen} 
                        />
                    </div>

                    {/* SHOW VERSION MOBILE */}
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="primary"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <RenderMobileMenu 
                mobileMenuId={mobileMenuId} 
                mobileMoreAnchorEl={mobileMoreAnchorEl} 
                isMobileMenuOpen={isMobileMenuOpen} 
                handleProfileMenuOpen={handleProfileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
            />
            <RenderOptionsMenu 
                menuId={menuId}
                isMenuOpen={isMenuOpen}
                anchorEl={anchorEl}  
                handleMenuClose={handleMenuClose}
            />
        </>
    )
}

export default TopBar;