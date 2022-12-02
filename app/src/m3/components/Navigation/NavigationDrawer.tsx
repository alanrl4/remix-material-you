import { Drawer, DrawerProps, useTheme } from "@mui/material";
import { useMemo } from "react";
import shadows from "../../constants/shadows";

export interface NavigationDrawerProps extends DrawerProps {
    width?: number;
    withRail?: number | boolean;
}

export default function NavigationDrawer({
    width = 360,
    withRail,
    sx,
    variant = "permanent",
    children,
    ...props
}: NavigationDrawerProps) {
    const theme = useTheme();
    const railWidth = useMemo(() => {
        if (withRail === undefined) {
            return 0;
        }

        if (typeof withRail === "number") {
            return withRail;
        }

        return 88;
    }, [withRail]);

    return (
        <Drawer
            sx={{
                width: width,
                flexShrink: 0,
                position: "relative",
                "& .MuiDrawer-paper": {
                    width: width,
                    boxSizing: "border-box",
                    left: railWidth,
                    color: "surfaceVariant.contrastText",
                    px: "12px",
                    borderRadius: "0 16px 16px 0",
                    boxShadow: variant === "permanent" ? 0 : shadows[1],
                    border: "none",
                },
                ...sx,
            }}
            variant={variant}
            anchor="left"
            SlideProps={{
                onEntering: (node, isAppearing) => {
                    node.style.transition = theme.transitions.create(
                        [
                            "transform",
                            "margin",
                            "height",
                            "width",
                            "top",
                            "left",
                        ],
                        {
                            easing: "cubic-bezier(0.2, 0, 0, 1)",
                            duration: 500,
                        }
                    );
                },
                onExiting: (node) => {
                    node.style.transition = theme.transitions.create(
                        [
                            "transform",
                            "margin",
                            "height",
                            "width",
                            "top",
                            "left",
                        ],
                        {
                            easing: "cubic-bezier(0.2, 0, 0, 1)",
                            duration: 200,
                        }
                    );
                },
            }}
            {...props}
        >
            {children}
        </Drawer>
    );
}
