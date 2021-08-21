import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
        },
        zIndex: theme.zIndex.drawer + 1,
        background: theme.palette.background.black
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
}));

const TopBar = ({handleDrawerToggle}) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon color="primary"  />
                </IconButton>
                <Hidden smDown implementation="css">
                    <Toolbar>
                        <Link to='/'>
                            <Avatar src="images/logos/logo01.png"  className={classes.avatar} />
                        </Link> 
                    </Toolbar>
                </Hidden>    
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;