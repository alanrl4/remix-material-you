import { styled, Switch as MuiSwitch } from "@mui/material";

const Switch = styled(MuiSwitch)(({ theme, color = "primary" }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
        borderRadius: 22 / 2,
        backgroundColor: theme.palette.surfaceVariant.main,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: theme.palette.outline,
        opacity: 1,
        "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 16,
            height: 16,
        },
        "&:before": {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette[color === "default" ? "primary" : color]
                    .contrastText
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "none",
        width: 16,
        height: 16,
        margin: 2,
        color: theme.palette.outline,
    },
    "& .Mui-checked": {
        "& .MuiSwitch-thumb": {
            color: theme.palette[color === "default" ? "primary" : color]
                .contrastText,
            open: 1,
        },
        "& + .MuiSwitch-track": {
            backgroundColor:
                theme.palette[color === "default" ? "primary" : color].main,
            borderColor:
                theme.palette[color === "default" ? "primary" : color].main,
            opacity: '1 !important',
        },
    },
}));

export default Switch;
