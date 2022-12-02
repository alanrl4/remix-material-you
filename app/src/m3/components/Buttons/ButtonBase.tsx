import { alpha, Button, styled } from '@mui/material'
import shadows from '../../constants/shadows'

// @ts-ignore
const ButtonBase = styled(Button)(({ theme }) => ({
	textTransform: 'none',
	borderRadius: 20,
	height: 40,
	paddingLeft: 24,
	paddingRight: 24,
	display: 'flex',
	flexDirection: 'row',
	position: 'relative',
	overflow: 'hidden',
	...theme.typography.labelLarge,
	'::after': {
		content: '""',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		transition: 'all 0.3s ease',
		backgroundColor: theme.palette.primary.contrastText,
		opacity: 0,
	},
	'&:hover': {
		'::after': {
			opacity: 0.08,
		},
		boxShadow: shadows[1],
	},
	'&:active, &:focus': {
		'::after': {
			opacity: 0.12,
		},
	},
	'&:active': {
		boxShadow: 'none',
	},
	':disabled': {
		color: alpha(theme.palette.text.primary, 0.38),
	},
}))

export default ButtonBase
