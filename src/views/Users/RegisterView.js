import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const RegisterView = () => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Register"
        >
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            userEmail: '',
                            userName: '',
                            cpf: '',
                            password: '',
                            policy: false
                        }}
                        validationSchema={
                            Yup.object().shape({
                                userEmail: Yup.string().email('Email invalido').max(40, 'Email deve ser menor que 30 caracteres.').required('Email é obrigatório.'),
                                userName: Yup.string().max(30, 'Nome deve ser menor que 30 caracteres.').required('Nome é obrigatório.'),
                                cpf: Yup.string().min(14, 'CPF deve ter 11 dígitos').required('CPF é obrigatório.'),
                                password: Yup.string().max(20, 'Senha deve ser menor que 30 caracteres.').required('Senha é obrigatório.'),
                                policy: Yup.boolean().oneOf([true], 'Leia as condiçoes e termos.')
                            })
                        }
                        onSubmit={async (values) => {
                            
                        }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            touched,
                            values
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box mb={3}>
                                    <Typography
                                        color="textPrimary"
                                        variant="h2"
                                    >
                                        Cadastrar Gerente
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >
                                        Cadastre-se como novo gerente e crie suas empresas
                                    </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(touched.userName && errors.userName)}
                                    fullWidth
                                    helperText={touched.userName && errors.userName}
                                    label="Nome"
                                    margin="normal"
                                    name="userName"
                                    onBlur={handleBlur}
                                    onFocus={() => {}}
                                    onChange={handleChange}
                                    value={values.userName}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.cpf && errors.cpf)}
                                    fullWidth
                                    helperText={touched.cpf && errors.cpf}
                                    label="CPF"
                                    margin="normal"
                                    name="cpf"
                                    onBlur={handleBlur}
                                    onFocus={() => {}}
                                    onChange={handleChange}
                                    value={values.cpf}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.userEmail && errors.userEmail)}
                                    fullWidth
                                    helperText={touched.userEmail && errors.userEmail}
                                    label="Email"
                                    margin="normal"
                                    name="userEmail"
                                    onBlur={handleBlur}
                                    onFocus={() => {}}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.userEmail}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="Senha"
                                    margin="normal"
                                    name="password"
                                    onBlur={handleBlur}
                                    onFocus={() => {}}
                                    onChange={handleChange}
                                    type="password"
                                    value={values.password}
                                    variant="outlined"
                                />
                                <Box
                                    alignItems="center"
                                    display="flex"
                                    ml={-1}
                                >
                                    <Checkbox
                                        checked={values.policy}
                                        name="policy"
                                        disabled={values.policy ? true : false}
                                        onChange={handleChange}
                                    />
                                    <Typography
                                        color="textSecondary"
                                        variant="body1"
                                    >
                                        Eu li e concordo com os
                                        {' '}
                                        <Link
                                            color="primary"
                                            component={RouterLink}
                                            to="#"
                                            underline="always"
                                            variant="h6"
                                        >
                                            Termos e Condições
                                        </Link>
                                    </Typography>
                                </Box>
                                {Boolean(touched.policy && errors.policy) && (
                                    <FormHelperText error>
                                        {errors.policy}
                                    </FormHelperText>
                                )}
                                <Box my={2}>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        onClick={ () => {} }
                                    >
                                        Cadastrar
                                    </Button>
                                </Box>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    Já sou cadastrado?
                                    {' '}
                                    <Link
                                        component={RouterLink}
                                        to="/login"
                                        variant="h6"
                                    >
                                        Fazer login
                                    </Link>
                                </Typography>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </Page>
    );
};

export default RegisterView;