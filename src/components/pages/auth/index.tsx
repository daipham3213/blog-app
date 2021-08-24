import React, { useState } from 'react';
import AuthContext from './components/authContext';
import { Grid, makeStyles } from '@material-ui/core';
import LoginCard from './components/LoginCard';
import { LoginModel } from '../../../models/services.model/models';
import { toast } from 'react-toastify';
import { history } from '../../../helpers/history';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    background: {},
    container: {
        padding: '1rem',
    },
}))

function AuthPage() {
    const classes = useStyles()

    const [active, setActive] = useState("login");
    const [username, setUsername] = useState("");

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
            setUsername(username);
            setActive("active");
        }, 600);
    };

    const contextValue = { switchToSignup, switchToSignIn, switchToActive };

    const handleLoginFormSubmit = async (formValues: LoginModel) => {

        // Toast success
        toast.success('Save student successfully!');
        console.log('Clicked');
        // Redirect back to student list
       // history.push('/admin/students');
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
                        spacing={0}
                        direction={'column'}
                        className={classes.container}
                    >
                        <Grid item xs={12} sm={6} style={{width: 400}}>
                            {active === 'login' ? <LoginCard initialValues={initialValues} onSubmit={handleLoginFormSubmit}/>: null}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default AuthPage;