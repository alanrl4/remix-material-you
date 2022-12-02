import { alpha } from '@mui/material'
import IconButtonBase, { IconButtonBaseProps } from './IconButtonBase'

export default function OutlinedIconButton({
	disabled,
	...iconButtonProps
}: IconButtonBaseProps) {
	return (
		<IconButtonBase
			sx={({ palette }) => ({
				backgroundColor: 'background.paper',
				color: 'surfaceVariant.contrastText',
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: disabled
					? alpha(palette.text.primary, 0.12)
					: 'outline',
				'::after': {
					backgroundColor: 'surfaceVariant.contrastText',
				},
				':hover, :active, :focus': {
					backgroundColor: 'background.paper',
				},
				':disabled': {
					backgroundColor: 'background.paper',
				},
			})}
			inactive
			disabled={disabled}
			{...iconButtonProps}
		/>
	)
}
