import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const RenderDesktopMenu = ({menuId, handleProfileMenuOpen}) => {
    return(
        <>
            <IconButton aria-label="show 17 new notifications" color="primary">
                <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="primary">
                <LocalGroceryStoreIcon />
            </IconButton>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="primary"
            >
                <AccountCircle />
            </IconButton>
        </>
    )
}

export default RenderDesktopMenu;