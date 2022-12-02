import {
    FormControl,
    InputBase,
    InputProps,
    styled,
    Typography
} from "@mui/material";
import { ReactNode, useId } from "react";

export interface TextFieldProps extends InputProps {
    label?: string | ReactNode;
}

export const StyledInputBase = styled(InputBase)(({ theme: { palette } }) => ({
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: palette.outline,
    borderRadius: "4px",
    padding: "8px 12px",
    ":focus-within": {
        borderColor: palette.primary.main,
    },
}));

export function TextFieldLabel({ label }: { label?: string | ReactNode }) {
    return (
        <Typography
            component="label"
            variant="labelLarge"
            fontWeight="bold"
            className=".M3-TextField-label"
        >
            {label}
        </Typography>
    );
}

function TextField({
    fullWidth,
    label,
    placeholder,
    ...props
}: TextFieldProps) {
    const id = useId();

    return (
        <FormControl
            fullWidth={fullWidth}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                ":focus-within": {
                    "& label": {
                        color: "primary.main",
                    },
                },
            }}
        >
            <TextFieldLabel label={label} />
            <StyledInputBase
                id={id}
                placeholder={
                    placeholder ?? (typeof label === "string" ? label : "")
                }
                {...props}
            />
        </FormControl>
    );
}

export default TextField;
