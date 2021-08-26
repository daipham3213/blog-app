import {
    AppBar, colors,
    CssBaseline,
    Fab, IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Brightness2Outlined, FlareOutlined, KeyboardArrowUp } from '@material-ui/icons';
import HideOnScroll from '../../../../../helpers/hideOnScroll';
import { useTranslation } from 'react-i18next';
import { useChangeTheme } from '../../../../theme';
import ScrollTop from '../../../../../helpers/scrollTop';
import DjinLogo from '../../../Logo/DjinLogo';


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
        color: theme.palette.primary.main,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    hide: {
        display: 'none',
    },
}));


export default function Header() {
    const classes = useStyles();
    const { i18n } = useTranslation();
    const theme = useTheme();
    const changeTheme = useChangeTheme();

    const isLight = theme.palette.type === 'light';
    const handleThemeMode = () => {
        changeTheme();
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
                    position='fixed'
                    className={classes.appBar}
                >
                    <Toolbar>
                        <DjinLogo />
                        <div style={{ flexGrow: 1 }} />
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