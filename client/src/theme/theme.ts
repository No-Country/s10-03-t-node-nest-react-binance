import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    primaryBlackish: string
    primaryBackground: string
    primaryBackground2: string
  }
  interface PaletteOptions {
    primaryBlackish: string
    primaryBackground: string
    primaryBackground2: string
  }
}

export interface CustomStyleProps {
  primaryBackground?: string,
  primaryBackground2?: string,
  primaryBlackish?: string
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    anchor: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    anchor?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    anchor: true;
  }
}

export const binanceTheme = createTheme({
  palette: {
    primaryBlackish: '#202327',
    primaryBackground: '#E7E9F7',
    primaryBackground2: '#F1F2FA',
    primary: {
      main: '#049C3D'
    },
    secondary: {
      main: '#DF3045'
    },
    error: {
      main: '#CD1812'
    },
    warning: {
      main: '#FFBA33'
    },
    success: {
      main: '#1C8747'
    }
  },
  typography: {
    fontFamily: 'Nunito, Nunito Sans, sans-serif',
    h1: {
      fontSize: '24px',
      lineHeight: '42px',
      fontWeight: 700
    },
    h2: {
      fontSize: '22px',
      lineHeight: '32px',
      fontWeight: 700
    },
    h3: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 700
    },
    h4: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 700
    },
    h5: {
      fontSize: '15px',
      lineHeight: '21px',
      fontWeight: 600
    },
    body1: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '15px',
      lineHeight: '25px',
      fontWeight: 400
    },
    body2: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '13px',
      lineHeight: '15px',
      fontWeight: 600
    },
    caption: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '11px',
      lineHeight: '15px',
      fontWeight: 600
    },
    button: {
      fontSize: '15px',
      lineHeight: '21px',
      fontWeight: 700,
      textTransform: 'none'
    },
    anchor: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#1226AA',
      textDecoration: 'underline',
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'filled'
      },
      styleOverrides: {
        root: {
          input: {
            '&[type=number]': {
              'MozAppearance': 'textfield',
            },
            '&::-webkit-outer-spin-button': {
              'WebkitAppearance': 'none',
              margin: 0,
            },
            '&::-webkit-inner-spin-button': {
              'WebkitAppearance': 'none',
              margin: 0,
            }
          }
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true
      },
      styleOverrides: {
        root: {
          '&.Mui-error': {
            color: 'black'
          },
          '&.Mui-focused': {
            color: 'black'
          }
        }
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
        size: 'small'
      },
      styleOverrides: {
        root: ({ theme }) => ({
          border: '2px solid #C7C8C8',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          ':hover': {
            backgroundColor: '#FFFFFF',
          },
          '&.Mui-error': {
            borderColor: '#CD1812',
          }
        })
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'filled'
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontStyle: 'normal',
          fontSize: '16px',
          padding: '13px 20px',
        },
        text: {
          '&.Mui-focusVisible': {
            backgroundColor: '#095C3C',
          },
          ':hover': {
            backgroundColor: '#095C3C',
          }
        },
        outlined: {
          border: '2px solid',
          ':hover': {
            border: '2px solid',
            background: '#015220',
          },
          ':focus': {
            color: 'white',
            background: '#095C3CA'
          },
          '&.Mui-disabled': {
            border: '2px solid #8F9193',
            color: '#8F9193'
          }
        },
        containedPrimary: {
          background: '#049C3D',
          ':hover': {
            backgroundColor: 'linear-gradient(270deg, #016627 0%, #014f1e 103.21%)'
          },
          ':focus': {
            backgroundColor: '#014f1e'
          },
          '&.Mui-disabled': {
            background: '#8F9193',
            color: 'white'
          }
        },
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '21px',
          color: '#202327',
          textAlign: 'left',
          borderBottom: 'none'
        },
        head: {
          color: '#555555',
          fontSize: '13px',
          lineHeight: '15px',
          fontFamily: 'Nunito Sans, sans-serif'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          ":nth-of-type(odd)": {
            background: 'rgba(231,233,247,0.4)',
          }
        },
        head: {
          backgroundColor: '#fff !important'
        },
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 32,
          height: 18,
          padding: 0,
          display: 'flex',
          ':active': {
            '& .MuiSwitch-thumb': {
              width: 15,
            },
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(14px) !important',
          },
          '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(12px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
              },
            },
          },
          '& .Mui-focusVisible': {
            backgroundColor: '#1226AA',
            color: '#F1F2FA',

          },
          '& .Mui-checked.Mui-focusVisible': {
            backgroundColor: 'black',
            color: 'white',

          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 14,
            height: 14,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
              duration: 200,
            }),
          },
          '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
              theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.1,
              backgroundColor: "#fff"
            }
          }
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        //@ts-ignore
        'anchor': {
          ':hover': {
            cursor: 'pointer'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '8px'
        }
      }
    },
    MuiSnackbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiSnackbarContent-root': {
            padding: '1em',
            fontSize: '15px',
            lineHeight: '17px',
            color: 'black',
            backgroundColor: theme.palette.primaryBackground
          }
        })
      }
    },
    MuiAutocomplete: { // fix popper wont open
      defaultProps: {
        componentsProps: {
          popper: {
            sx: {
              height: 0
            }
          },
          paper: {
            sx: {
              width: 'max-content'
            }
          }
        }
      }
    },
    MuiDatePicker: { // fix popper wont open
      defaultProps: {
        PopperProps: {
          sx: {
            height: 0
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: ({ theme }) => ({
          background: theme.palette.primaryBackground,
          borderRadius: '8px',
          fontSize: '9px',
          fontWeight: 700,
          color: theme.palette.primary.main
        })
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.primaryBackground,
          borderWidth: '1px'
        })
      }
    }
  }
}
)