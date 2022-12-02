import { ChipProps } from '@mui/material'
import BaseChip from './BaseChip'

export interface SuggestionChipProps extends ChipProps {}

export default function SuggestionChip({ ...props }: SuggestionChipProps) {
	return <BaseChip {...props} />
}
