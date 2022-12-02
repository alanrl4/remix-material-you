import { withEmotionCache } from "@emotion/react";
import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import useEmotionStyles from "../hooks/useEmotionStyles";

interface DocumentProps {
    children: React.ReactNode;
    title?: string;
    locale?: string;
    dir?: string;
}

const Document = withEmotionCache(
    ({ children, title, dir, locale = "es" }: DocumentProps, emotionCache) => {
        useEmotionStyles(emotionCache);

        return (
            <html lang={locale} dir={dir}>
                <head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1"
                    />
                    {title ? <title>{title}</title> : null}
                    <Meta />
                    <Links />
                    <meta
                        name="emotion-insertion-point"
                        content="emotion-insertion-point"
                    />
                </head>
                <body>
                    {children}
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </body>
            </html>
        );
    }
);

export default Document;
