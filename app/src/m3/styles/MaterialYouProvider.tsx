import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function MaterialYouProvider({
	children,
	theme,
}: PropsWithChildren<{ theme: Theme }>) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
