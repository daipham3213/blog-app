import React, { useState } from 'react';
import AuthContext from './components/authContext';
import { Grid, makeStyles } from '@material-ui/core';
import LoginCard from './components/LoginCard';
import { LoginModel } from '../../models/services.model/models';
import { useAppDispatch } from '../../app/hooks';
import { loginActions } from './slices/loginSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    background: {},
    container: {
        padding: '1rem',
        verticalAlign: 'middle',
    },
    item: {
        padding: '1rem',
        position: 'absolute',
        right: 0,
        top: '50%',
        width: 400,
        transform: 'translate(-50%, -50%)',
    },
}))

function AuthPage() {
    const classes = useStyles()

    const dispatch = useAppDispatch();
    const [active, setActive] = useState("login");
    //const [username, setUsername] = useState("");

    const switchToSignup = () => {
        setTimeout(() => {
            setActive("signup");
        }, 600);
    };

    const switchToSignIn = () => {
        setTimeout(() => {
            setActive("login");
        }, 600);
    };
    const switchToActive = (username: string) => {
        setTimeout(() => {
            //setUsername(username);
            setActive("active");
        }, 600);
    };

    const contextValue = { switchToSignup, switchToSignIn, switchToActive };

    const handleLoginFormSubmit = (formValues: LoginModel) => {
        dispatch(loginActions.request({ ...formValues }))
    };

    const initialValues : LoginModel = {
        username: '',
        password: '',
    }
    return (
        <AuthContext.Provider value={contextValue}>
            <div className={classes.root}>
                <div className={classes.background}>
                    <Grid
                        container
                        justifyContent={'center'}
                        alignItems={'center'}
                        spacing={1}
                        direction={'column'}
                        className={classes.container}
                    >
                        <Grid item xs={12} sm={6} className={classes.item}>
                            {active === 'login' ? <LoginCard initialValues={initialValues} onSubmit={handleLoginFormSubmit}/>: null}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default AuthPage;