import { Icon, IconButton, IconButtonProps, styled } from '@mui/material'
import { ReactNode } from 'react'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
	textTransform: 'none',
	borderRadius: 20,
	height: 40,
	width: 40,
	display: 'flex',
	flexDirection: 'row',
	position: 'relative',
	'::after': {
		content: '""',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		borderRadius: 20,
		transition: 'all 0.3s ease',
		backgroundColor: theme.palette.primary.contrastText,
		opacity: 0,
	},
	'&:hover': {
		'::after': {
			opacity: 0.08,
		},
	},
	'&:active, &:focus': {
		'::after': {
			opacity: 0.12,
		},
	},
	'&:active': {
		boxShadow: 'none',
	},
}))

export type IconButtonBaseProps = {
	children?: ReactNode | string
	inactive?: boolean
} & IconButtonProps
export default function IconButtonBase({
	children,
	inactive,
	...props
}: IconButtonBaseProps) {
	return (
		<StyledIconButton {...props}>
			{typeof children === 'string' ? (
				<Icon
					sx={{
						fontVariationSettings: `'FILL' ${inactive ? 0 : 1}`,
						transition: 'all 0.3s ease',
					}}
				>
					{children}
				</Icon>
			) : (
				children
			)}
		</StyledIconButton>
	)
}
