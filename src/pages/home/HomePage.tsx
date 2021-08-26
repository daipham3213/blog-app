import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

interface IHomePage extends React.Component{
    className?: any;
    children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
    root: {}
}))

const HomePage = (props: IHomePage) => {
    const classes = useStyles()

    return (
        <div className={clsx(props.className, classes.root)}>
            {props.children}
        </div>
    );
};

export default HomePage;