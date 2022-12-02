import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";
import ButtonBase from "./ButtonBase";

export default function OutlinedButton({
    sx,
    color = 'primary',
    ...buttonProps
}: ButtonProps & { children: ReactNode }) {
    return (
        <ButtonBase
            sx={({ palette }) => ({
                backgroundColor: "background.paper",
                color: "text.primary",
                minWidth: 48,
                paddingLeft: "12px",
                paddingRight:
                    buttonProps.startIcon !== undefined ? "16px" : "12px",
                "::after": {
                    backgroundColor: color + ".main",
                },
                ":hover, :active, :focus": {
                    backgroundColor: "background.paper",
                },
                ":hover": {
                    boxShadow: "none",
                },
                ":disabled": {
                    backgroundColor: "background.paper",
                },
                ...sx,
            })}
            color={color}
            {...buttonProps}
        />
    );
}
