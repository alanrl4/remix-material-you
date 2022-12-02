import { Menu, styled } from '@mui/material'
import shadows from '../constants/shadows'

export default styled(Menu)(({ theme }) => ({
	boxShadow: shadows[2],
	'& .MuiPaper-root': {
		backgroundColor: theme.palette.background.paper,
		borderRadius: '4px',
		'&::after': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '4px',
			backgroundColor: theme.palette.primary.main,
			opacity: 0.08,
			pointerEvents: 'none',
		},
	},
}))
