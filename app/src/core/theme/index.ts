import {
    argbFromHex,
    hexFromArgb,
    themeFromSourceColor
} from "@material/material-color-utilities";
import { createTheme } from "@mui/material/styles";
import { dp } from "./dp";

export const buildMuiYouTheme = (sourceColor: string) => {
    const paletteScheme = themeFromSourceColor(argbFromHex(sourceColor));

    return createTheme({
        palette: {
            primary: {
                main: hexFromArgb(paletteScheme.schemes.light.primary),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onPrimary
                ),
            },
            secondary: {
                main: hexFromArgb(paletteScheme.schemes.light.secondary),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onSecondary
                ),
            },
            error: {
                main: hexFromArgb(paletteScheme.schemes.light.error),
                contrastText: hexFromArgb(paletteScheme.schemes.light.onError),
            },
            tertiary: {
                main: hexFromArgb(paletteScheme.schemes.light.tertiary),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onTertiary
                ),
            },
            primaryContainer: {
                main: hexFromArgb(paletteScheme.schemes.light.primaryContainer),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onPrimaryContainer
                ),
            },
            secondaryContainer: {
                main: hexFromArgb(
                    paletteScheme.schemes.light.secondaryContainer
                ),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onSecondaryContainer
                ),
            },
            tertiaryContainer: {
                main: hexFromArgb(
                    paletteScheme.schemes.light.tertiaryContainer
                ),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onTertiaryContainer
                ),
            },
            errorContainer: {
                main: hexFromArgb(paletteScheme.schemes.light.errorContainer),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onErrorContainer
                ),
            },
            surfaceVariant: {
                main: hexFromArgb(paletteScheme.schemes.light.surfaceVariant),
                contrastText: hexFromArgb(
                    paletteScheme.schemes.light.onSurfaceVariant
                ),
            },
            background: {
                default: hexFromArgb(paletteScheme.schemes.light.background),
                paper: hexFromArgb(paletteScheme.schemes.light.surface),
            },
            text: {
                primary: hexFromArgb(paletteScheme.schemes.light.onBackground),
                secondary: hexFromArgb(
                    paletteScheme.schemes.light.onSurfaceVariant
                ),
            },
            outline: hexFromArgb(paletteScheme.schemes.light.outline),
            outlineVariant: hexFromArgb(
                paletteScheme.schemes.light.outlineVariant
            ),
            action: {
                hoverOpacity: 0.08,
                focusOpacity: 0.12,
                activatedOpacity: 0.12,
            },
        },
        typography: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
        },
        components: {
            MuiIcon: {
                defaultProps: {
                    baseClassName: "material-symbols-rounded",
                },
            },
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                    variant: "contained",
                    sx: (theme) => ({
                        textTransform: "none",
                        position: "relative",
                        borderRadius: dp(20),
                        paddingLeft: dp(24),
                        paddingRight: dp(24),
                        height: dp(40),
                        fontSize: dp(14),
                        lineHeight: dp(20),
                        fontWeight: 500,
                        "::before": {
                            content: "''",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 20,
                            backgroundColor: "currentColor",
                            opacity: 0,
                            transition: theme.transitions.create("opacity"),
                        },
                        ":hover::before": {
                            opacity: 0.08,
                        },
                    }),
                },
                styleOverrides: {
                    root: ({ theme, ownerState }) => ({
                        borderColor:
                            ownerState.variant === "outlined"
                                ? theme.palette.outline
                                : "transparent",
                    }),
                },
            },
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        zIndex: -1000,
                    },
                },
            },
        },
    });
};

export default buildMuiYouTheme("#3e51d1");
