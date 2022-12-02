import {
    Box,
    CircularProgress, Dialog,
    DialogActions,
    DialogContent,
    Icon,
    Typography
} from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { TextButton } from "../..";

export interface BasicDialogProps {
    open: boolean;
    onClose?: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
    children?: ReactNode;
    icon?: string;
    title?: string;
    cancelText?: string;
    confirmText?: string;
    hideDeleteButton?: boolean;
    loading?: boolean;
}

export default function BasicDialog({
    open,
    onClose,
    onCancel,
    onConfirm,
    children,
    icon,
    title,
    cancelText = "Cancelar",
    confirmText = "Confirmar",
    hideDeleteButton = false,
    loading = false,
}: BasicDialogProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    p: "0",
                    backgroundColor: "transparent",
                },
                elevation: 0,
            }}
            scroll="body"
            closeAfterTransition
        >
            <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.27 }}
                exit={{ opacity: 1, y: -20 }}
            >
                <DialogContent
                    sx={({ typography }) => ({
                        minWidth: "280px",
                        maxWidth: "560px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        color: "surfaceVariant.contrastText",
                        fontSize: "14px",
                        borderRadius: "28px",
                        p: "24px",
                        backgroundColor: "background.paper",
                        ...typography.bodyMedium,
                    })}
                >
                    {title && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                alignItems: icon ? "center" : "flex-start",
                            }}
                        >
                            {icon && (
                                <Icon sx={{ color: "secondary.main" }}>
                                    {icon}
                                </Icon>
                            )}
                            <Typography
                                sx={{ color: "text.primary" }}
                                variant="headlineSmall"
                            >
                                {title}
                            </Typography>
                        </Box>
                    )}
                    {children}
                    {(onConfirm || onCancel) && (
                        <DialogActions
                            sx={{ p: 0, pt: "8px", justifyContent: "flex-end" }}
                        >
                            {!hideDeleteButton && (
                                <TextButton
                                    onClick={onCancel ?? onClose}
                                    sx={{ color: "primary.main" }}
                                    disabled={loading}
                                >
                                    {cancelText}
                                </TextButton>
                            )}
                            <TextButton
                                onClick={onConfirm}
                                sx={{ color: "primary.main" }}
                                disabled={loading}
                                endIcon={
                                    loading && <CircularProgress size={14} />
                                }
                            >
                                {confirmText}
                            </TextButton>
                        </DialogActions>
                    )}
                </DialogContent>
            </motion.div>
        </Dialog>
    );
}
