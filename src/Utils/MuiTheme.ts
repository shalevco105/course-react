import { createTheme } from "@mui/material";

export const muiTheme = createTheme({

    palette: {
        primary: {
            main: "#493A7F"
        },
        secondary: {
            main: "#FA0"
        }
    },

    typography: {
        allVariants: {
            fontFamily: "Jost",
            fontSize: 20
        }
    },

    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontSize: 16,
                    transform: "rotate(-10deg)"
                }
            }
        }
    }

});