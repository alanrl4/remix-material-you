import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardProps,
	styled,
} from '@mui/material'
import { ReactNode } from 'react'
import shadows from '../../constants/shadows'

// @ts-ignore
const StyledCard = styled(Card)(({ theme, hoverable }) => ({
	backgroundColor: theme.palette.surfaceVariant.main,
	color: theme.palette.surfaceVariant.contrastText,
	borderRadius: '12px',
	padding: 0,
	boxShadow: 'none',
	position: 'relative',
	transitions: 'box-shadow 0.2s',
	backgroundImage: 'none',
	'::after': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		borderRadius: '12px',
		pointerEvents: 'none',
		backgroundColor: theme.palette.text.primary,
		opacity: 0,
		transition: 'opacity 0.2s',
	},
	':hover': {
		'::after': {
			opacity: hoverable ? 0.08 : 0,
		},
		boxShadow: hoverable ? shadows[1] : 'none',
	},
}))

export interface ElevatedCardProps extends CardProps {
	actions?: ReactNode
	hoverable?: boolean
}

export default function FilledCard({
	children,
	actions,
	hoverable,
	...props
}: ElevatedCardProps) {
	return (
		// @ts-ignore
		<StyledCard hoverable={hoverable} {...props}>
			<Box sx={{ p: '16px' }}>
				<CardContent sx={{ p: 0 }}>{children}</CardContent>
				{actions && (
					<CardActions sx={{ justifyContent: 'flex-end', p: 0 }}>
						{actions}
					</CardActions>
				)}
			</Box>
		</StyledCard>
	)
}
