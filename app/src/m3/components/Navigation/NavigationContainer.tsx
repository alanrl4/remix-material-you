import { Box } from '@mui/material'
import { PropsWithChildren, ReactNode } from 'react'

export interface NavigationContainerProps extends PropsWithChildren {
	navigation: ReactNode
}

export default function NavigationContainer({
	children,
	navigation,
}: NavigationContainerProps) {
	return (
		<Box sx={{ display: 'flex' }}>
			{navigation}
			<Box
				component='main'
				sx={{ flexGrow: 1, bgcolor: 'background.default' }}
			>
				{children}
			</Box>
		</Box>
	)
}
