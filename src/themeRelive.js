import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#632a57"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#FCD5BD',
      main: "#EC837C"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    }
    /* error: will use the default color
        action: {
          light: '#ffa115',
          main: "#ffa115",
          dark: "#ffa115",
          contrastText: "#ffa115",
        },*/
  },
  typography: {
    fontWeightMedium: 500,
    body1: {
      fontSize: "1.5em"
    },
    subtitle1: {
      fontSize: "1.3em"
    },
    button: {
      fontSize: "1.6em",
      lineHeight: "1.75em"
    }
  },
  shape: {
    borderRadius: 5
  },
  h1: {
    fontSize: "5em"
  },
  h4: {
    color: "crimson"
  },
  // overrides global material components styles
  overrides: {
    MuiTypography: {
      h4: {
        fontSize: '1.8em',
        margin: 0,
        marginTop: '24px',
        color: '#632A57'
      },
      body1: {
        fontSize: '1.3em',
        margin: '0.5em 0'
      },
      body2: {
        fontSize: '1.1em'
      },
      caption: {
        margin: '1em 0',
        fontSize: '1.1em',
        color: 'crimson'
      }
    },
    MuiAppBar: {
      root: {
        backgroundColor: "white"
      }
    },
    MuiGrid: {
      item: {
        padding: '0 8px'
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: "8px"
      }
    },
    MuiDialog: {
      paper: {
        width: 414
      }
    },
    MuiDialogContent: {
      root: {
        padding: "0 16px",
      }
    },
    MuiStepLabel: {
      iconContainer: {
        padding: "0 !important"
      },
      active: {
        color: '#632A57 !important'
      },
      completed: {
        color: '#B05B9E !important'
      }
    },
    MuiButton: {
      root: {
        backgroundColor: "white",
        boxShadow: "0px 3px 4px rgba(0,0,0,0.2)",
        margin: ".4em 0 .4em 0",
        padding: ".5em",
        fontSize: '1.2em',
        textTransform: 'none',
        maxWidth: 304
      },
      outlined: {
        padding: ".7em",
        border: "0px solid",
        color: "#656565"
      },
      outlinedPrimary: {
        border: "2px solid",
        fontWeight: 500,
        "&:hover": {
          border: "2px solid"
        }
      },
      containedSecondary: {
        color: "#fff"
      }
    },
    MuiFormControl: {
      root: {
        width: '100%',
      }
    },
    MuiSelect: {
      icon: {
        top: 'inherit'
      }
    },
    MuiInput: {
      underline: {
        '&::before': {
          display: 'none'
        }
      }
    },
    MuiInputBase: {
      root: {
        display: 'inline-flex',
        width: '100%',
        color: 'rgb(115, 115, 141)',
        backgroundColor: "#F7F5F5",
        fontSize: "1.1em",
        /* fontSize: "1.2em", */
        /* borderRadius: '16px', */ /* 33px */
        padding: '10px',
        margin: 'auto 6px',
        /* border: '1.03958px solid rgba(201, 199, 199, 0.5)', */
      },
      multiline: {
        padding: '16px 10px',
        paddingTop: '16px !important'
      },
      formControl: {
        /* margin: '8px',
        minWidth: 120, */
      }
    },
    MuiDivider: {
      root: {
        margin: "1.6em 0"
      }
    },
    MuiSvgIcon: {
      root: {
        width: "1.6em",
        height: "1.6em"
      },
      colorAction: {
        color: "#FFA115"
      }
    },
    MuiIconButton: {
      root: {}
    },
    MuiListItem: {
      gutters: {
        paddingLeft: "24px",
        fontSize: "1.1em"
      }
    }
  }
});
