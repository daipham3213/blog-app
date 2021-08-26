import React, { Suspense } from 'react';
import './App.css';

import i18n from './components/common/i18n/config';
import { I18nextProvider } from 'react-i18next';
import LoadingOverlay from './components/common/LoadingOverlay';
import { HourglassEmpty } from '@material-ui/icons';
import ThemeProvider from './components/theme/ThemeContextProvider';
import dark from './components/theme/mode/theme';
import Routes from './app/route';


function App() {
    return (
        <ThemeProvider theme={[dark]}>
            <Suspense fallback={<LoadingOverlay loading={true} success={true} successIcon={<HourglassEmpty />} />}>
                <I18nextProvider i18n={i18n}>
                    <Routes/>
                </I18nextProvider>
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
