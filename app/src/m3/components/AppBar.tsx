import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Box,
    Toolbar,
    Typography
} from "@mui/material";
import { StandarIconButton } from "..";

export interface AppBarProps extends MuiAppBarProps {
    dense?: boolean;
    title?: string;
    icon?: string;
    onIconClick?: () => void;
}

export default function AppBar({
    sx,
    dense,
    children,
    title,
    icon,
    onIconClick,
    ...props
}: AppBarProps) {
    return (
        <MuiAppBar
            {...props}
            sx={{
                backgroundColor: "background.paper",
                color: "text.primary",
                ...sx,
            }}
            elevation={0}
        >
            <Toolbar variant={dense ? "dense" : undefined}>
                {onIconClick && (
                    <StandarIconButton
                        edge="start"
                        sx={{ mr: 2 }}
                        size="small"
                        color="inherit"
                        onClick={onIconClick}
                    >
                        {icon}
                    </StandarIconButton>
                )}
                <Typography variant="titleLarge">{title}</Typography>
                <Box flexGrow={1}></Box>
                {children}
            </Toolbar>
        </MuiAppBar>
    );
}
