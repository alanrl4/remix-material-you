import IconButtonBase, { IconButtonBaseProps } from "./IconButtonBase";

export default function FilledIconButton({
    inactive,
    color = "primary",
    sx,
    ...iconButtonProps
}: IconButtonBaseProps) {
    return (
        <IconButtonBase
            sx={{
                backgroundColor: "transparent",
                color: Boolean(inactive)
                    ? "surfaceVariant.contrastText"
                    : color + ".main",
                "::after": {
                    backgroundColor: "surfaceVariant.contrastText",
                },
                ":hover, :active, :focus": {
                    backgroundColor: "background.paper",
                },
                ":disabled::after": {
                    backgroundColor: "text.primary",
                    opacity: 0.12,
                },
                ...sx,
            }}
            color={color}
            inactive={inactive}
            {...iconButtonProps}
        />
    );
}
