import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 64,
        height: '100%',
    },
    content: {
        height: '100%',
    },
}));

const MinimalLayout = (props: React.ComponentProps<any>) => {
    const classes = useStyles();

    const { children } = props;
    return (
        <div className={classes.root}>
            <Header />
            <main className={classes.content}>{children}</main>
        </div>
    );
};

export default MinimalLayout;