import React from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core';

import TopBar from './TopBar';
import ScrollTop from '../../components/ScrollTop';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 0,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const MainLayout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Toolbar id="back-to-top-anchor" />
            <Container maxWidth="xl" >
              <Box py={3} px={2} my={3}>
                <Outlet />
              </Box>
            </Container>
            <ScrollTop {...props}>
              <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;