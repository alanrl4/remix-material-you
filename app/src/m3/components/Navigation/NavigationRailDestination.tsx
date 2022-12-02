import { Box, Icon, Typography } from "@mui/material";
import TouchRipple, {
    TouchRippleActions
} from "@mui/material/ButtonBase/TouchRipple";
import { MouseEventHandler, useMemo, useRef } from "react";

export interface NavigationRailDestinationProps {
    title?: string;
    icon?: string;
    active?: boolean;
    dense?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function NavigationRailDestination({
    title,
    icon,
    active,
    dense,
    onClick,
}: NavigationRailDestinationProps) {
    const _touchRipple = useRef<TouchRippleActions | undefined>();
    const backgroundColor = useMemo(
        () => (active ? "secondaryContainer.main" : "background.surface"),
        [active]
    );
    const iconColor = useMemo(
        () =>
            active
                ? "secondaryContainer.contrastText"
                : "surfaceVariant.contrastText",
        [active]
    );
    const textColor = useMemo(
        () => (active ? "text.primary" : "surfaceVariant.contrastText"),
        [active]
    );

    const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) =>
        _touchRipple.current?.start(e);
    const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) =>
        _touchRipple.current?.stop(e);

    return (
        <Box
            sx={{
                minHeight: dense ? "36px" : "56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                position: "relative",
                px: "12px",
                width: "100%",
                cursor: "pointer",
                color: iconColor,
                ":hover ": {
                    "& .NavigationRailDestination-indicator::after": {
                        opacity: 0.08,
                    },
                },
                ":active, :focus": {
                    "& .NavigationRailDestination-indicator::after": {
                        opacity: 0.12,
                    },
                },
            }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            tabIndex={0}
            onClick={onClick}
        >
            <Box
                sx={{
                    backgroundColor: backgroundColor,
                    width: dense ? "36px" : "56px",
                    height: dense ? "36px" : "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: dense ? "28px" : "16px",
                    position: "relative",
                    "::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        bgcolor: textColor,
                        transition: "opacity 0.2s",
                        opacity: 0,
                        borderRadius: dense ? "28px" : "16px",
                    },
                }}
                className={"NavigationRailDestination-indicator"}
            >
                <Icon
                    sx={{
                        transition: "all 0.2s",
                        fontSize: dense ? "18px" : undefined,
                        fontVariationSettings: `'FILL' ${active ? 1 : 0}`,
                    }}
                    color="inherit"
                >
                    {icon}
                </Icon>
                <TouchRipple ref={_touchRipple} />
            </Box>
            {!dense && (
                <Typography
                    variant="labelSmall"
                    sx={{
                        color: textColor,
                        fontWeight: 700,
                        textAlign: "center",
                    }}
                >
                    {title}
                </Typography>
            )}
        </Box>
    );
}
