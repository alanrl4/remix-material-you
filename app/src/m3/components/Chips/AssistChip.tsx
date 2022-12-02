import { ChipProps, Icon } from '@mui/material'
import BaseChip from './BaseChip'

export interface AssistChipProps extends ChipProps {
	startIcon?: string
	endIcon?: string
}

export default function AssistChip({
	sx,
	startIcon,
	endIcon,
	...props
}: AssistChipProps) {
	return (
		<BaseChip
			{...props}
			sx={{
				backgroundColor: 'background.paper',
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: 'outline',
				'.MuiChip-icon': {
					color: 'primary.main',
					marginLeft: '8px',
					fontSize: '18px',
				},
				':hover, :active, :focus': {
					shadow: 0,
					backgroundColor: 'background.paper',
				},
				...sx,
			}}
			clickable
			icon={startIcon ? <Icon>{startIcon}</Icon> : undefined}
			deleteIcon={endIcon ? <Icon>{endIcon}</Icon> : undefined}
		/>
	)
}
