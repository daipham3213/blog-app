import React from 'react';
import { createTheme, Theme, ThemeProvider as MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import { PaletteType } from '@material-ui/core';
import dark from './mode/theme';

interface ThemeProviderProps {
    children: React.ReactNode;
    theme: Theme[];
}

const ThemeDispatchContext = React.createContext<any>(null);


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
    const appTheme = localStorage.getItem('appTheme') ?? 'dark';

    const themeInitialOptions = {
        paletteType: appTheme,
    };

    const getThemeByName = (theme: string) => {
        return themeMap[theme];
    }

    const themeMap: { [key: string]: any } = {
        dark,
    };

    const currentMode = getThemeByName('dark');

    const [themeOptions, dispatch] = React.useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'changeTheme':
                localStorage.setItem('appTheme', action.payload);
                return {
                    ...state,
                    paletteType: action.payload,
                };
            default:
                throw new Error();
        }
    }, themeInitialOptions);

    const memoizedTheme = React.useMemo(() => {
        return createTheme({
            ...currentMode,
            palette: {
                ...currentMode.palette,
                type: themeOptions.paletteType as PaletteType,
            },
        });
    }, [currentMode, themeOptions.paletteType]);

    return (
        <MuiThemeProvider theme={memoizedTheme}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </MuiThemeProvider>
    );
};

export default ThemeProvider;

export const useChangeTheme = () => {
    const dispatch = React.useContext(ThemeDispatchContext);
    const theme = useTheme();
    return React.useCallback(() =>
            dispatch({
                type: 'changeTheme',
                payload: theme.palette.type === 'light' ? 'dark' : 'light',
            }),
        [theme.palette.type, dispatch]);
};
