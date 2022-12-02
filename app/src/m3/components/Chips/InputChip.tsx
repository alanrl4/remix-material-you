import { ChipProps, Icon, IconButton } from "@mui/material";
import BaseChip from "./BaseChip";

export interface AssistChipProps extends ChipProps {
    startIcon?: string;
    selected?: boolean;
}

export default function InputChip({
    sx,
    startIcon,
    selected,
    ...props
}: AssistChipProps) {
    return (
        <BaseChip
            {...props}
            sx={{
                backgroundColor: selected
                    ? "secondaryContainer.main"
                    : "background.paper",
                borderWidth: selected ? 0 : 1,
                borderStyle: "solid",
                borderColor: "outline",
                ".MuiChip-icon": {
                    color: selected
                        ? "secondaryContainer.contrastText"
                        : "primary.main",
                    marginLeft: "8px",
                    fontSize: "18px",
                },
                ".MuiChip-deleteIcon": {
                    color: selected
                        ? "secondaryContainer.contrastText"
                        : "surfaceVariant.contrastText",
                    fontSize: "18px",
                },
                ".MuiChip-deleteIcon:hover": {
                    color: selected
                        ? "secondaryContainer.contrastText"
                        : "surfaceVariant.contrastText",
                },
                ":hover, :active, :focus": {
                    shadow: 0,
                    backgroundColor: selected
                        ? "secondaryContainer.main"
                        : "background.paper",
                },
                ...sx,
            }}
            icon={startIcon ? <Icon>{startIcon}</Icon> : undefined}
            deleteIcon={
                <IconButton size="small" sx={{ m: 0 }}>
                    <Icon sx={{ fontSize: "16px" }}>close</Icon>
                </IconButton>
            }
        />
    );
}
