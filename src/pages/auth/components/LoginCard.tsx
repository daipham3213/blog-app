import { Avatar, Button, CircularProgress, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import AuthContext from './authContext';
import { LockOutlined } from '@material-ui/icons';
import { InputField } from '../../../components/formFields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginModel } from '../../../models/services.model/models';
import { Alert } from '@material-ui/lab';
import { useAppSelector } from '../../../app/hooks';

export interface LoginFormProps {
    initialValues?: LoginModel,
    onSubmit?: (formValues: LoginModel) => void;
}

const schema = yup.object().shape({
    username: yup
        .string()
        .required('Please enter username.'),
    password: yup
        .string()
        .required('Please enter password'),
});

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        height: '100%',
        position: 'relative',
        paddingBottom: 20,
    },

}));

const LoginCard = ({ initialValues, onSubmit }: LoginFormProps) => {
    const classes = useStyles();

    const [error, setError] = useState<string>('');
    const isLogging = useAppSelector((state) => state.login.logging);
    //const [animate, setAnimate] = useState<number>(1)

    // @ts-ignore
    const { switchToSignUp } = useContext(AuthContext);

    const handleFormSubmit = async (formValues: LoginModel) => {
        try {
            // Clear previous submission error
            setError('');
            await onSubmit?.(formValues);
        } catch (error) {
            setError(error.message);
        }
    };

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginModel>({
        defaultValues: initialValues,
        resolver: yupResolver(schema),
    });


    // @ts-ignore
    return (
        <Paper className={classes.root}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container justifyContent={'center'} spacing={2}>
                    <Grid
                        item xs={12}
                        container
                        justifyContent={'center'}
                        alignItems={'center'}
                        direction={'column'}
                    >
                        <Avatar><LockOutlined /></Avatar>
                        <Typography variant={'overline'}>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <InputField label={'Username'} control={control} name={'username'} sizeString={'medium'} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField
                            label={'Password'}
                            control={control}
                            name={'password'}
                            type={'password'}
                            sizeString={'medium'}
                        />
                    </Grid>
                    {error && <Alert severity='error'>{error}</Alert>}
                    <Grid item container justifyContent={'space-evenly'} spacing={2} xs={12}>
                        <Button type={'submit'} variant='outlined' color='primary' disabled={isSubmitting}>
                            {isLogging && <CircularProgress size={16} color='primary' />}
                            &nbsp;Login
                        </Button>
                        <Button variant='outlined' color='secondary' onClick={switchToSignUp}>Sign up</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default LoginCard;