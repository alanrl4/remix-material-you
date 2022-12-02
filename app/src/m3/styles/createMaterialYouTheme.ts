import {
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor,
} from '@material/material-color-utilities'
import { createTheme } from '@mui/material/styles'

export default function createMaterialYouTheme(
	sourceColor: string,
	darkMode?: boolean
) {
	const paletteScheme = themeFromSourceColor(argbFromHex(sourceColor))

	return createTheme({
		palette: {
			mode: darkMode ? 'dark' : 'light',
			primary: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light'].primary
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light'].onPrimary
				),
			},
			secondary: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light'].secondary
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onSecondary
				),
			},
			error: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light'].error
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light'].onError
				),
			},
			tertiary: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light'].tertiary
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onTertiary
				),
			},
			primaryContainer: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.primaryContainer
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onPrimaryContainer
				),
			},
			secondaryContainer: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.secondaryContainer
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onSecondaryContainer
				),
			},
			tertiaryContainer: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.tertiaryContainer
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onTertiaryContainer
				),
			},
			errorContainer: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.errorContainer
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onErrorContainer
				),
			},
			surfaceVariant: {
				main: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.surfaceVariant
				),
				contrastText: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onSurfaceVariant
				),
			},
			background: {
				default: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.background
				),
				paper: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light'].surface
				),
			},
			text: {
				primary: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onBackground
				),
				secondary: hexFromArgb(
					paletteScheme.schemes[darkMode ? 'dark' : 'light']
						.onSurfaceVariant
				),
			},
			outline: hexFromArgb(
				paletteScheme.schemes[darkMode ? 'dark' : 'light'].outline
			),
			outlineVariant: hexFromArgb(
				paletteScheme.schemes[darkMode ? 'dark' : 'light']
					.outlineVariant
			),
			action: {
				hoverOpacity: 0.08,
				focusOpacity: 0.12,
				activatedOpacity: 0.12,
			},
		},
		typography: {
			fontFamily: "'Plus Jakarta Sans', sans-serif",
			button: {
				fontSize: '14px',
				fontWeight: 500,
			},
			displayLarge: {
				lineHeight: '64px',
				fontSize: '57px',
				fontWeight: 400,
			},
			displayMedium: {
				lineHeight: '52px',
				fontSize: '45px',
				fontWeight: 400,
			},
			displaySmall: {
				lineHeight: '44px',
				fontSize: '36px',
				fontWeight: 400,
			},
			headlineLarge: {
				lineHeight: '40px',
				fontSize: '32px',
				fontWeight: 400,
			},
			headlineMedium: {
				lineHeight: '36px',
				fontSize: '28px',
				fontWeight: 400,
			},
			headlineSmall: {
				lineHeight: '32px',
				fontSize: '24px',
				fontWeight: 400,
			},
			titleLarge: {
				lineHeight: '28px',
				fontSize: '22px',
				fontWeight: 400,
			},
			titleMedium: {
				lineHeight: '24px',
				fontSize: '16px',
				letterSpacing: '0.15px',
				fontWeight: 500,
			},
			titleSmall: {
				lineHeight: '20px',
				fontSize: '14px',
				letterSpacing: '0.1px',
				fontWeight: 500,
			},
			labelLarge: {
				lineHeight: '20px',
				fontSize: '14px',
				letterSpacing: '0.1px',
				fontWeight: 500,
			},
			labelMedium: {
				lineHeight: '16px',
				fontSize: '12px',
				letterSpacing: '0.5px',
				fontWeight: 500,
			},
			labelSmall: {
				lineHeight: '16px',
				fontSize: '11px',
				letterSpacing: '0.5px',
				fontWeight: 500,
			},
			bodyLarge: {
				lineHeight: '24px',
				fontSize: '16px',
				letterSpacing: '0.5px',
				fontWeight: 400,
			},
			bodyMedium: {
				lineHeight: '20px',
				fontSize: '14px',
				letterSpacing: '0.25px',
				fontWeight: 400,
			},
			bodySmall: {
				lineHeight: '16px',
				fontSize: '12px',
				letterSpacing: '0.4px',
				fontWeight: 400,
			},
		},
		components: {
			MuiIcon: {
				defaultProps: {
					baseClassName: 'material-symbols-rounded',
				},
			},
			MuiButton: {
				defaultProps: {
					disableElevation: true,
					variant: 'contained',
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
	})
}
