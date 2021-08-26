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
                    <div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquam dolore excepturi fuga
                            fugit minus quisquam reprehenderit repudiandae veniam. Cumque dolore inventore ipsum
                            officiis praesentium quas quidem reiciendis suscipit veritatis.
                        </div>
                        <div>Aut delectus dolorem et explicabo harum nulla? Ad asperiores commodi, cum cumque, deleniti
                            dolor dolore doloremque fugit laboriosam minima minus obcaecati odit perferendis provident
                            quos repudiandae sapiente velit vitae voluptas.
                        </div>
                        <div>Consequatur minima minus praesentium sint. Adipisci aliquid beatae, dolorem doloribus earum
                            est eum modi obcaecati porro quo reprehenderit temporibus unde vitae! Alias animi ea iusto
                            labore laudantium, nihil numquam officia.
                        </div>
                        <div>At dicta maiores minima modi nemo porro tempore totam? Ab aperiam aspernatur consectetur
                            ducimus eaque eius eligendi error illo inventore, itaque magni odit pariatur quaerat
                            quibusdam recusandae ut voluptates voluptatibus.
                        </div>
                        <div>Accusamus adipisci consectetur dicta dolore dolorem doloribus dolorum ducimus ea eaque,
                            enim est eveniet in iure laudantium libero molestiae officia qui repellat repellendus sed
                            sint tenetur unde, ut, vero voluptas?
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default MainLayout;