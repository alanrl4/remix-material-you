import { Box, Icon, Typography } from "@mui/material";
import TouchRipple, {
    TouchRippleActions,
} from "@mui/material/ButtonBase/TouchRipple";
import { MouseEventHandler, PropsWithChildren, useMemo, useRef } from "react";

export interface NavigationDrawerItemProps extends PropsWithChildren {
    title?: string;
    icon?: string;
    active?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    button?: boolean;
    badgeLabel?: string;
    dense?: boolean;
    isTitle?: boolean;
}

export default function NavigationDrawerItem({
    title,
    icon,
    active,
    badgeLabel,
    dense,
    button,
    children,
    isTitle,
    onClick,
}: NavigationDrawerItemProps) {
    const _touchRipple = useRef<TouchRippleActions | undefined>();
    const backgroundColor = useMemo(
        () => (active ? "secondaryContainer.main" : "background.surface"),
        [active]
    );
    const textColor = useMemo(
        () =>
            active
                ? "secondaryContainer.contrastText"
                : "surfaceVariant.contrastText",
        [active]
    );
    const buttonStyles = useMemo(() => {
        if (button) {
            return {
                "::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    bgcolor: textColor,
                    borderRadius: "28px",
                    opacity: 0,
                    transition: "opacity 0.2s",
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
            };
        }

        return {};
    }, [button, active]);

    const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) =>
        _touchRipple.current?.start(e);
    const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) =>
        _touchRipple.current?.stop(e);

    return (
        <Box
            sx={{
                height: dense ? "48px" : "56px",
                pl: "16px",
                pr: "24px",
                bgcolor: backgroundColor,
                color: textColor,
                borderRadius: "28px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "12px",
                position: "relative",
                ...buttonStyles,
            }}
            onMouseDown={button !== undefined ? onMouseDown : undefined}
            onMouseUp={button !== undefined ? onMouseUp : undefined}
            tabIndex={button !== undefined ? 0 : undefined}
            onClick={onClick}
        >
            {children ? (
                children
            ) : (
                <>
                    {icon && (
                        <Icon
                            color="inherit"
                            sx={{
                                fontVariationSettings: `'FILL' ${
                                    active ? 1 : 0
                                }`,
                                transition: "all 0.2s",
                            }}
                        >
                            {icon}
                        </Icon>
                    )}
                    <Typography
                        variant="labelLarge"
                        color="inherit"
                        sx={{
                            flexGrow: 1,
                            fontWeight: isTitle ? 700 : 500,
                        }}
                    >
                        {title}
                    </Typography>
                    {badgeLabel && (
                        <Typography variant="labelLarge" color="inherit">
                            {badgeLabel}
                        </Typography>
                    )}
                    <TouchRipple ref={_touchRipple} />
                </>
            )}
        </Box>
    );
}
