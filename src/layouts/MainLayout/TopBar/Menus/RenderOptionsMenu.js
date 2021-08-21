import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        color: theme.palette.background.black,
    },
    listIcon: {
        marginRight: -25
    },
    link: {
        textDecoration: 'none'
    }
}));

const RenderOptionsMenu = ({menuId, isMenuOpen, anchorEl, handleMenuClose}) => {
    const classes = useStyles()
    return(
        <>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <Link to="/login" className={classes.link} >
                    <MenuItem className={classes.root} onClick={handleMenuClose}>
                        <ListItemIcon className={classes.listIcon}>
                            <VpnKeyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Entrar" />                        
                    </MenuItem>
                </Link>
                <Link to="/cadastrar" className={classes.link} >
                    <MenuItem className={classes.root} onClick={handleMenuClose} >
                        <ListItemIcon className={classes.listIcon}>
                            <PersonAddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Cadastrar" />
                    </MenuItem>
                </Link> 
                <Link to="/app" className={classes.link} >
                    <MenuItem className={classes.root} onClick={handleMenuClose} >
                        <ListItemIcon className={classes.listIcon}>
                            <LaptopChromebookIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="APP" />
                    </MenuItem>
                </Link>    
            </Popover>
        </>
    )
}

export default RenderOptionsMenu;