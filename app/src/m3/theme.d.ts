import { PaletteColor, PaletteColorOptions } from '@mui/material'

declare module '@mui/material/styles' {
	interface Palette {
		primaryContainer: PaletteColor
		secondaryContainer: PaletteColor
		tertiaryContainer: PaletteColor
		tertiary: PaletteColor
		errorContainer: PaletteColor
		surfaceVariant: PaletteColor
		outline: string
		outlineVariant: string
	}
	interface PaletteOptions {
		primaryContainer?: PaletteColorOptions
		secondaryContainer?: PaletteColorOptions
		tertiaryContainer?: PaletteColorOptions
		tertiary?: PaletteColorOptions
		errorContainer?: PaletteColorOptions
		surfaceVariant?: PaletteColorOptions
		outline?: string
		outlineVariant?: string
	}

	interface TypographyVariants {
		displayLarge: React.CSSProperties
		displayMedium: React.CSSProperties
		displaySmall: React.CSSProperties
		headlineLarge: React.CSSProperties
		headlineMedium: React.CSSProperties
		headlineSmall: React.CSSProperties
		titleLarge: React.CSSProperties
		titleMedium: React.CSSProperties
		titleSmall: React.CSSProperties
		labelLarge: React.CSSProperties
		labelMedium: React.CSSProperties
		labelSmall: React.CSSProperties
		bodyLarge: React.CSSProperties
		bodyMedium: React.CSSProperties
		bodySmall: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		displayLarge?: React.CSSProperties
		displayMedium?: React.CSSProperties
		displaySmall?: React.CSSProperties
		headlineLarge?: React.CSSProperties
		headlineMedium?: React.CSSProperties
		headlineSmall?: React.CSSProperties
		titleLarge?: React.CSSProperties
		titleMedium?: React.CSSProperties
		titleSmall?: React.CSSProperties
		labelLarge?: React.CSSProperties
		labelMedium?: React.CSSProperties
		labelSmall?: React.CSSProperties
		bodyLarge?: React.CSSProperties
		bodyMedium?: React.CSSProperties
		bodySmall?: React.CSSProperties
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		primaryContainer: true
		secondaryContainer: true
		tertiaryContainer: true
		tertiary: true
		errorContainer: true
		surfaceVariant: true
	}
}

declare module '@mui/material/IconButton' {
	interface IconButtonPropsColorOverrides {
		primaryContainer: true
		secondaryContainer: true
		tertiaryContainer: true
		tertiary: true
		errorContainer: true
		surfaceVariant: true
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		displayLarge: true
		displayMedium: true
		displaySmall: true
		headlineLarge: true
		headlineMedium: true
		headlineSmall: true
		titleLarge: true
		titleMedium: true
		titleSmall: true
		labelLarge: true
		labelMedium: true
		labelSmall: true
		bodyLarge: true
		bodyMedium: true
		bodySmall: true
	}
}
