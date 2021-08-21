import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Page from '../../components/Page';
import FormLogin from './FormLogin';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Login"
    >  
      <Box
        display="flex"
        flexDirection="column"
        height="80%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              userEmail: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              userEmail: Yup.string().email('Email invalido.').max(255).required('Email é obrigatório.'),
              password: Yup.string().max(255).required('Senha é obrigatório.')
            })}
            onSubmit={async ({userEmail, password}) => {
              
            }}
          >
            {
              formikConfig => ( <FormLogin setOpenAlert={() => {} } formikConfig={formikConfig} /> )
            }
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;