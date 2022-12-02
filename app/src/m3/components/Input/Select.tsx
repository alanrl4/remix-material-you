import { FormControl, MenuItem, Select as MuiSelect } from "@mui/material";
import shadows from "../../constants/shadows";
import { StyledInputBase, TextFieldLabel, TextFieldProps } from "./TextField";

export interface SelectOptions {
    label: string;
    value: string | number | readonly string[] | undefined;
}

export interface SelectProps extends TextFieldProps {
    options?: SelectOptions[];
}

export default function Selectt({
    value,
    onChange,
    label,
    options,
    sx,
    ...props
}: SelectProps) {
    return (
        <FormControl
            fullWidth
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
            <MuiSelect
                label={label}
                value={value}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            borderRadius: "4px",
                            bgcolor: "background.paper",
                            "::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "4px",
                                bgcolor: "primary.main",
                                opacity: 0.08,
                                pointerEvents: "none",
                            },
                        },
                    },
                    sx: {
                        boxShadow: shadows[2],
                    },
                }}
                input={<StyledInputBase />}
                {...props}
            >
                {options!.map(({ label, value }) => (
                    <MenuItem key={label + "_option"} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
}
