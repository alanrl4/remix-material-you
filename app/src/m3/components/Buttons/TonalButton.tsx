import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'
import ButtonBase from './ButtonBase'

export default function TonalButton({
	...buttonProps
}: ButtonProps & { children: ReactNode }) {
	return (
		<ButtonBase
			color='secondaryContainer'
			sx={{
				'::after': {
					backgroundColor:
						(buttonProps.color ?? 'secondaryContainer') +
						'.contrastText',
				},
				':hover, :active, :focus': {
					backgroundColor:
						(buttonProps.color ?? 'secondaryContainer') + '.main',
				},
			}}
			{...buttonProps}
		/>
	)
}
