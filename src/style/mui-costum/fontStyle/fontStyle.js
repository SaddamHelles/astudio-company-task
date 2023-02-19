import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.9rem',
        },
      },
    },
  },
});

export { theme };
