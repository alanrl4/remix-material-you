import IconButtonBase, { IconButtonBaseProps } from './IconButtonBase'

export default function FilledIconButton({
	inactive,
	...iconButtonProps
}: IconButtonBaseProps) {
	return (
		<IconButtonBase
			sx={{
				backgroundColor: inactive
					? 'surfaceVariant.main'
					: 'primary.main',
				color: inactive ? 'primary.main' : 'primary.contrastText',
				'::after': {
					backgroundColor: inactive
						? 'primary.main'
						: 'primary.contrastText',
				},
				':hover, :active, :focus': {
					backgroundColor: inactive
						? 'surfaceVariant.main'
						: 'primary.main',
				},
				':disabled::after': {
					backgroundColor: 'text.primary',
					opacity: 0.12,
				},
			}}
			inactive={inactive}
			{...iconButtonProps}
		/>
	)
}
