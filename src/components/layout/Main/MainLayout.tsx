import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import { useAppSelector } from '../../../app/hooks';
import { selectOpenState } from './components/SideBar';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '60px 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,

        minHeight: '100vh',
    },
    rootOpen: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '240px 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,

        minHeight: '100vh',
    },
    header: {
        gridArea: 'header',
    },
    sidebar: {
        gridArea: 'sidebar',
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
    },
    main: {
        gridArea: 'main',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 3),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function MainLayout(props: React.ComponentProps<any>) {
    const { children } = props;

    const classes = useStyles();

    const open = useAppSelector(selectOpenState);


    return (
        <Box className={clsx(classes.root, {
            [classes.rootOpen]: open,
        })}>
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.sidebar}>
                <SideBar />
            </Box>
            <Box className={classes.main}>
                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </div>
            </Box>
        </Box>
    );
}

export default MainLayout;