import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardProps,
	styled,
} from '@mui/material'
import { ReactNode } from 'react'
import shadows from '../../constants/shadows'

// @ts-ignore
const StyledCard = styled(Card)(({ theme, hoverable }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: '12px',
	padding: 0,
	boxShadow: shadows[1],
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
		boxShadow: hoverable ? shadows[2] : shadows[1],
	},
}))

export interface ElevatedCardProps extends CardProps {
	actions?: ReactNode
	hoverable?: boolean
}

export default function ElevatedCard({
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
