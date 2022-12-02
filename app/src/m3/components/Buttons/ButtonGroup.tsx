import {
	Box,
	ButtonGroup as MuiButtonGroup,
	Collapse,
	Fade,
	Icon,
	Typography,
} from '@mui/material'
import OutlinedButton from './OutlinedButton'

export interface ButtonGroupOptions<T> {
	label: string
	value: T
	icon?: string
	disabled?: boolean
}
export interface ButtonGroupProps<T> {
	options: ButtonGroupOptions<T>[]
	multiple?: boolean
	value?: T
	onChange?: (value: T) => void
	dense?: boolean
}

export default function ButtonGroup<T>({
	options,
	value,
	multiple,
	onChange,
	dense,
}: ButtonGroupProps<T>) {
	return (
		<MuiButtonGroup
			sx={{
				marginLeft: '16px',
				marginRight: '16px',
			}}
		>
			{options.map(({ label, icon, value: v, disabled }) => {
				console.log(value, v, multiple)
				const selected = multiple
					? (value! as T[]).includes(v)
					: value === v

				return (
					<OutlinedButton
						key={'button_group_' + v}
						disabled={disabled}
						sx={{
							flex: 1,
							height: dense ? 32 : 40,
							borderColor: 'outline',
							backgroundColor: selected
								? 'secondaryContainer.main'
								: 'background.paper',
							color: selected
								? 'secondaryContainer.contrastText'
								: 'text.primary',
							fontWeight: 600,
							'::after': {
								backgroundColor: selected
									? 'secondaryContainer.contrastText'
									: 'text.primary',
							},
							':focus::after': {
								opacity: 0,
							},
							':hover, :active, :focus': {
								boxShadow: 'none',
								borderColor: 'outline',
								backgroundColor: selected
									? 'secondaryContainer.main'
									: 'background.paper',
							},
						}}
						onClick={() => {
							if (disabled) return
							if (multiple) {
								const newValue = new Set(value! as T[])
								if (newValue.has(v)) newValue.delete(v)
								else newValue.add(v)
								onChange!(Array.from(newValue) as T)
							} else {
								onChange!(v)
							}
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: '8px',
								alignItems: 'center',
							}}
						>
							<Collapse
								orientation='horizontal'
								in={selected}
								sx={{
									height: '18px',
									position: 'absolute',
								}}
							>
								<Icon
									sx={{
										fontSize: '18px',
									}}
								>
									check
								</Icon>
							</Collapse>
							<Fade in={Boolean(icon) && !selected}>
								<Icon
									sx={{
										fontSize: '18px',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									{icon}
								</Icon>
							</Fade>
							<Typography variant='labelLarge'>
								{label}
							</Typography>
						</Box>
					</OutlinedButton>
				)
			})}
		</MuiButtonGroup>
	)
}
