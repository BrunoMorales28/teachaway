
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: "#68c441",
            dark: "#218477",
            contrastText: "#000"
        },
        secondary: {
            main: "#282c34",
            light: "#424855",
            contrastText: "#fff"
        },
    },
    typography: {
        h1: {
            fontSize: "2rem",
            fontWeight: 800,
            color: "#fff"
        },
        h2: {
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff"
        },
        body1: {
            fontSize: "1rem",
            color: "#fff"
        },
        subtitle1: {
            fontSize: "1.25rem",
            color: "#fff"
        },  
    },
    
})

theme=createTheme(theme, {
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.dark
                },
              },
        },
        MuiTypography: {
            defaultProps: {
              variantMapping: {
                h1: 'h1',
                h2: 'h2',
                subtitle1: 'p',
                subtitle2: 'p',
                body1: 'p',
                body2: 'p',
              },
            },
            styleOverrides: {
                root: {
                    color: "#fff"
                },
            },
        },
        MuiImageList: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.dark,
                    padding: "1rem",
                    borderRadius: "0.5rem"
                },
            },
        },
        MuiImageListItem: {
            styleOverrides: {
                root: {
                    display: "flex", 
                    flexDirection: "column" ,
                    justifyContent: "space-between" ,
                    minHeight:"100%" ,
                    backgroundColor: theme.palette.secondary.light,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column" ,
                    alignContent: "space-between" ,
                    backgroundColor: theme.palette.primary.main , 
                    borderRadius: 4
                },
            },
        }
    }
})

export default theme