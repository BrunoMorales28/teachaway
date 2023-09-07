import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#68c441",
      dark: "#218477",
      contrastText: "#fff",
    },
    secondary: {
      main: "#282c34",
      light: "#424855",
      contrastText: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 800,
      color: "#fff",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 800,
      color: "#fff",
    },
    body1: {
      fontSize: "1rem",
      color: "#fff",
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#fff",
    },
    subtitle2: {
      fontSize: "0.75rem",
      color: "#fff",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.light,
          borderBottom: `2px solid ${theme.palette.secondary.dark}`,
          height: 80,
          padding: 40,
          alignItems: "flex-start",
          justifyContent: "center",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          subtitle1: "p",
          subtitle2: "p",
          body1: "p",
          body2: "p",
        },
      },
      styleOverrides: {
        root: {
          overflowWrap: "break-word",
          color: "#fff",
        },
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.dark,
          padding: "1rem",
          borderRadius: "0.5rem",
        },
      },
    },
    MuiImageListItem: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100%",
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 4,
        },
      },
    },
    MuiButtonGroup: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            "& .MuiButtonGroup-grouped": {
              border: 0,
              padding: 12,
              flexGrow: 1,

              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                border: `1px solid ${theme.palette.secondary.main}`,
              },
            },
            "& .MuiButtonGroup-grouped:not(:last-of-type)": {
              border: 0,
            },
          },
        },
      ],
    },
  },
});

export default theme;
