import {
    AppBar, colors,
    CssBaseline,
    Fab, IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Brightness2Outlined, FlareOutlined, KeyboardArrowUp } from '@material-ui/icons';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { drawerActions, selectOpenState } from '../SideBar';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import HideOnScroll from '../../../../../helpers/hideOnScroll';
import { useTranslation } from 'react-i18next';
import { useChangeTheme } from '../../../../theme';
import ScrollTop from '../../../../../helpers/scrollTop';
import DjinLogo from '../../../Logo/DjinLogo';
import SearchBar from '../../../SearchBar/SearchBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
}));



export default function Header() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { i18n } = useTranslation();
    const theme = useTheme();
    const changeTheme = useChangeTheme();

    const open = useAppSelector(selectOpenState);

    const isLight = theme.palette.type === 'light';

    const handleDrawerOpen = () => {
        dispatch(drawerActions.toggle());
    };

    const handleThemeMode = () => {
        changeTheme()
    };


    const handleChangeLang = () => {
        i18n.changeLanguage(i18n.language === 'vi-VN' ? 'en-EN' : 'vi-VN').then(() => {
            console.log(i18n.language);
        });
    };

    return (
        <>
            <CssBaseline />
            <HideOnScroll>
                <AppBar
                    color={'primary'}
                    position='fixed'
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            onClick={handleDrawerOpen}
                            edge='start'
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <DjinLogo/>
                        <SearchBar style={{ flexGrow: 1, color: 'inherit' }} />
                        <IconButton
                            style={{ color: colors.common.white }}
                            aria-label={'theme toggle'}
                            onClick={handleThemeMode}
                            edge={'end'}
                        >
                            {isLight ? <FlareOutlined /> : <Brightness2Outlined />}
                        </IconButton>
                        <IconButton
                            onClick={handleChangeLang}
                            style={{ color: colors.common.white }}
                            aria-label={'lang toggle'}
                            edge={'end'}
                        >
                            <Typography variant={'overline'}
                                        style={{ fontSize: '0.8rem', fontWeight: 'bold', color: colors.common.white }}
                            >
                                {i18n.language.slice(0, 2)}
                            </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div id='back-to-top-anchor' />

            <ScrollTop>
                <Fab color='secondary' size='small'>
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </>
    );
}