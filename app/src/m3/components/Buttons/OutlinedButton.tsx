import { alpha, ButtonProps } from "@mui/material";
import { ReactNode } from "react";
import ButtonBase from "./ButtonBase";

export default function OutlinedButton({
    sx,
    color = "primary",
    ...buttonProps
}: ButtonProps & { children: ReactNode }) {
    return (
        <ButtonBase
            sx={({ palette }) => ({
                backgroundColor: "background.paper",
                color: "text.primary",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: buttonProps.disabled
                    ? alpha(palette.text.primary, 0.12)
                    : "outline",
                "::after": {
                    backgroundColor: color + ".main",
                },
                ":hover, :active, :focus": {
                    backgroundColor: "background.paper",
                    color: "text.primary",
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
