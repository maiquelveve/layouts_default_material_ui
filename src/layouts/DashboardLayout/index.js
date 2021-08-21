import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Outlet } from 'react-router-dom';

import TopBar from './TopBar';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const DashboardLayout = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <TopBar handleDrawerToggle={handleDrawerToggle} />
            <NavBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Container maxWidth="xl" >
                    <Box py={2}>
                        <Outlet />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default DashboardLayout;