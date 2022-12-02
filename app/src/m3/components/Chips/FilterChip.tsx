import { ChipProps, Icon } from '@mui/material'
import BaseChip from './BaseChip'

export interface FilterChipProps extends ChipProps {
	selected?: boolean
}

export default function FilterChip({
	sx,
	selected,
	...props
}: FilterChipProps) {
	return (
		<BaseChip
			{...props}
			sx={{
				backgroundColor: selected
					? 'secondaryContainer.main'
					: 'background.paper',
				borderWidth: selected ? 0 : 1,
				borderStyle: 'solid',
				borderColor: 'outline',
				color: selected
					? 'secondaryContainer.contrastText'
					: 'surfaceVariant.contrastText',
				'.MuiChip-icon': {
					color: selected
						? 'secondaryContainer.contrastText'
						: 'surfaceVariant.contrastText',
					marginLeft: '8px',
                    fontSize: '18px',
				},
				':hover, :active, :focus': {
					shadow: 0,
					backgroundColor: selected
						? 'secondaryContainer.main'
						: 'background.paper',
				},
				...sx,
			}}
			icon={selected ? <Icon>check</Icon> : undefined}
		/>
	)
}
