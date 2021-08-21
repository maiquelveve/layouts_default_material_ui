import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import {
    Box,
    Button,
    Link,
    TextField,
    Typography,
    Grid,
} from '@material-ui/core';


const FormLogin = ({setOpenAlert, formikConfig, ...rest}) => {
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
    } = formikConfig

    const { width } = rest

    return (
        <form onSubmit={handleSubmit}>
            <Box mb={3}>
                <Typography
                    color="textPrimary"
                    variant="h2"
                >
                    LOGIN
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                >
                    Faça login para entrar.
                </Typography>
            </Box>
            <TextField
                error={Boolean(touched.userEmail && errors.userEmail)}
                fullWidth
                helperText={touched.userEmail && errors.userEmail}
                label="Email"
                margin="normal"
                name="userEmail"
                type="email"
                value={values.userEmail}
                onChange={handleChange}
                onFocus={() => setOpenAlert(false)}
                onBlur={handleBlur}
                variant="outlined"
            />
            <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Senha"
                margin="normal"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onFocus={() => setOpenAlert(false)}
                onBlur={handleBlur}
                variant="outlined"
            />
            <Box my={2}>
                <Button
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => setOpenAlert(false)}
                >
                    Entrar
                </Button>
            </Box>
            <Grid container spacing={3} >
                <Grid item xs={6}>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        {width !== 'xs' &&
                            'Não é cadastrado?'
                        }
                        
                        {' '}
                        <Link
                            component={RouterLink}
                            to="/cadastrar"
                            variant="h6"
                        >
                            Cadastre-se
                        </Link>
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                        align="right"
                    >
                        <Link
                            component={RouterLink}
                            to="/esqueciMinhaSenha"
                            variant="h6"
                        >
                            Esqueci minha senha
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </form>
    )
}

FormLogin.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(FormLogin);