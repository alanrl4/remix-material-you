import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'
import shadows from '../../constants/shadows'
import ButtonBase from './ButtonBase'

export default function OutlinedButton({
	...buttonProps
}: ButtonProps & { children: ReactNode }) {
	return (
		<ButtonBase
			sx={({ palette }) => ({
				backgroundColor: 'background.paper',
				color: 'text.primary',
				boxShadow: shadows[1],
				'::after': {
					backgroundColor: 'primary.main',
				},
				':hover, :active, :focus': {
					backgroundColor: 'background.paper',
					color: 'text.primary',
				},
				':hover': {
					boxShadow: shadows[2],
				},
				':disabled': {
					backgroundColor: 'background.paper',
				},
			})}
			{...buttonProps}
		/>
	)
}
