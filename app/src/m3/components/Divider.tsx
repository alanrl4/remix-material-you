// const Divider

import { Divider as MuiDivider, DividerProps } from '@mui/material'

export default function Divider({ sx, ...props }: DividerProps) {
	return (
		<MuiDivider
			{...props}
			sx={{ backgroundColor: 'outlineVariant', ...sx }}
		/>
	)
}
