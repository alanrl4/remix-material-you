import { Chip, styled } from "@mui/material";

// @ts-ignore
const BaseChip = styled(Chip)(({ theme, label }) => ({
    height: 32,
    borderRadius: 8,
    leftPadding: 16,
    rightPadding: 16,
    position: "relative",
    color: theme.palette.surfaceVariant.contrastText,
    ...theme.typography.labelLarge,
    "::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        pointerEvents: "none",
        backgroundColor: theme.palette.text.primary,
        opacity: 0,
    },
    ":hover": {
        "::after": {
            opacity: 0.08,
        },
    },
    ":active, :focus": {
        "::after": {
            opacity: 0.12,
        },
    },
    "& .MuiChip-label": {
        paddingLeft: label ? 12 : 0,
    },
}));

export default BaseChip;
