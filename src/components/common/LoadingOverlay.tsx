import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 105,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            opacity: 0.5,
        },
        wrapper: {
            margin: theme.spacing(2),
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 106,
        },
        buttonSuccess: {
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
        },
        fabProgress: {
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    }),
);

export interface LoadingProps {
    loading: boolean,
    success: boolean,
    successIcon?: any,
    defaultIcon?: any,
}

export default function LoadingOverlay({ loading, success, ...props }: LoadingProps) {
    const classes = useStyles();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Fab
                    aria-label='save'
                    color='primary'
                    className={buttonClassname}
                >
                    {success ? (props.successIcon ?? <CheckIcon />) : props.defaultIcon ?? <SaveIcon />}
                </Fab>
                {loading && <CircularProgress size={68} className={classes.fabProgress} />}
            </div>
        </div>

    );
}
