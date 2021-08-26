import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Hidden} from "@material-ui/core";
import clsx from 'clsx';
import LogoIcon from './icon';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingBottom: '1rem',
        marginLeft: '0.2rem'
    },
    title: {
        fontSize: '1rem',
        fontWeight: 'bold',
        height: '0.0rem',
    },
    solo: {
        height: '0.0rem',
        fontSize: '0.6rem',
    },
    project: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '0.5rem',
    },
    logo: {
        maxWidth: '100%',
        height:'auto',
        objectFit: 'contain',
        width: '3rem',
        filter: 'invert(100%) sepia(0%) saturate(2%) hue-rotate(24deg) brightness(116%) contrast(100%)',
    },
}))

const DjinLogo = (props: any) => {
    const classes = useStyles()

    return (
        <div className={clsx(classes.project, props.className)}>
            <LogoIcon className={classes.logo} />
            <Divider orientation="vertical" flexItem style={{margin: '0 5px'}}/>
            <div className={classes.titleContainer}>
                <p className={classes.title}>Djin</p>
                <Hidden smDown>
                    <p className={classes.solo}>a small blog</p>
                </Hidden>
            </div>
        </div>
    );
};

export default DjinLogo;