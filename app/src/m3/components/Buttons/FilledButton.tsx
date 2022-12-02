import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'
import ButtonBase from './ButtonBase'

export default function FilledButton({
	...buttonProps
}: ButtonProps & { children: ReactNode }) {
	return (
		<ButtonBase
			color='primary'
			sx={{
				'::after': {
					backgroundColor:
						(buttonProps.color ?? 'primary') + '.contrastText',
				},
				':hover, :active, :focus': {
					backgroundColor: (buttonProps.color ?? 'primary') + '.main',
				},
			}}
			{...buttonProps}
		/>
	)
}
