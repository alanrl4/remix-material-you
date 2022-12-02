import { Box, Drawer, DrawerProps } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import { StandarIconButton } from "../..";

export interface NavigationRailProps extends PropsWithChildren, DrawerProps {
    width?: number;
    icon?: string;
    onIconClick?: () => void;
    align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
    bottomContent?: ReactNode;
}

export default function NavigationRail({
    width = 88,
    icon = "menu",
    onIconClick,
    align = "flex-start",
    children,
    sx,
    bottomContent,
    ...props
}: NavigationRailProps) {
    return (
        <Drawer
            sx={{
                width: width,
                flexShrink: 0,
                transition: "all 0.2s",
                "& .MuiDrawer-paper": {
                    width: width,
                    boxSizing: "border-box",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                    gap: "12px",
                    px: 0,
                    py: "12px",
                    border: "none",
                    transition: "all 0.2s",
                    "::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "primary.main",
                        transition: "all 0.2s",
                        opacity: 0.05,
                        pointerEvents: "none",
                    },
                },
                ...sx,
            }}
            variant="permanent"
            anchor="left"
            {...props}
        >
            {onIconClick && (
                <StandarIconButton inactive onClick={onIconClick}>
                    {icon}
                </StandarIconButton>
            )}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flexGrow: 1,
                    justifyContent: align,
                }}
            >
                {children}
            </Box>
            {bottomContent}
        </Drawer>
    );
}
