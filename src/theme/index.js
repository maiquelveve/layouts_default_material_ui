import { createTheme} from '@material-ui/core';
import { primaryColor, darkColor, blackColor, secondaryColor } from './globalStyles';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      dark: darkColor,
      default: darkColor,
      paper: secondaryColor,
      black: blackColor
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor
    },
    text: {
      primary: primaryColor,
      secondary: secondaryColor
    }
  },
  overrides: {
    MuiButton: {
      root: {
        '& .MuiButton-label': {
          fontWeight: 'bold'
        }
      }
    },
    MuiTextField: {
      root: {
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'yellow',
        },
    
        '& .MuiInputBase-root': {
            color: 'white',
        },
        '& .MuiFormLabel-root': {
            color: 'white',
        },
    
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'yellow',
          },
          '&:hover fieldset': {
            borderColor: 'yellow',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'yellow',
          },
        },
      }
    }
  },
  shadows,
  typography
});

export default theme;
