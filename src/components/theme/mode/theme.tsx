import { createTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';


const theme = {
    palette,
    typography,
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
};

const dark = createTheme({ ...theme});
export default dark;

