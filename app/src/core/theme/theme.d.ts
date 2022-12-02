import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
    interface Palette {
        primaryContainer: PaletteColor;
        secondaryContainer: PaletteColor;
        tertiaryContainer: PaletteColor;
        tertiary: PaletteColor;
        errorContainer: PaletteColor;
        surfaceVariant: PaletteColor;
        outline: string;
        outlineVariant: string;
    }
    interface PaletteOptions {
        primaryContainer?: PaletteColorOptions;
        secondaryContainer?: PaletteColorOptions;
        tertiaryContainer?: PaletteColorOptions;
        tertiary?: PaletteColorOptions;
        errorContainer?: PaletteColorOptions;
        surfaceVariant?: PaletteColorOptions;
        outline?: string;
        outlineVariant?: string;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        primaryContainer: true;
        secondaryContainer: true;
        tertiaryContainer: true;
        tertiary: true;
        errorContainer: true;
        surfaceVariant: true;
    }
}

declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
        primaryContainer: true;
        secondaryContainer: true;
        tertiaryContainer: true;
        tertiary: true;
        errorContainer: true;
        surfaceVariant: true;
    }
}
