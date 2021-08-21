import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        color: theme.palette.background.black,
    },
}));

const RenderMobileMenu = ({mobileMenuId, mobileMoreAnchorEl, isMobileMenuOpen, handleProfileMenuOpen, handleMobileMenuClose }) => {
    const classes = useStyles()

    return(
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem className={classes.root}>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notificações</p>
            </MenuItem>
            <MenuItem className={classes.root}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <LocalGroceryStoreIcon />
                </IconButton>
                <p>Carrinho</p>
            </MenuItem>
            <MenuItem className={classes.root} onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )
}

export default RenderMobileMenu;