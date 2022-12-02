import IconButtonBase, { IconButtonBaseProps } from './IconButtonBase'

export default function TonalIconButton({
	inactive,
	...iconButtonProps
}: IconButtonBaseProps) {
	return (
		<IconButtonBase
			sx={{
				backgroundColor: inactive
					? 'surfaceVariant.main'
					: 'secondaryContainer.main',
				color: inactive
					? 'surfaceVariant.contrastText'
					: 'secondaryContainer.contrastText',
				'::after': {
					backgroundColor: inactive
						? 'surfaceVariant.contrastText'
						: 'secondaryContainer.contrastText',
				},
				':hover, :active, :focus': {
					backgroundColor: inactive
						? 'surfaceVariant.main'
						: 'secondaryContainer.main',
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
