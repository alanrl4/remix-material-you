import { CssBaseline, ThemeProvider } from "@mui/material";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useCatch, useLoaderData, useLocation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Document from "./src/core/components/Document";
import { GlobalLoading } from "./src/core/components/GloabalLoading";
import styles from "./src/core/styles/root.css";
import theme from "./src/core/theme";
import { createMaterialYouTheme, MaterialYouProvider } from "./src/m3";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
    title: "Remix Material You",
});

export const loader: LoaderFunction = async ({ request }) => {
    return json({
        themeColor: "#009c10",
    });
};

export default function App() {
    const { themeColor } = useLoaderData();

    const _scrollbars = useRef<Scrollbars | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (_scrollbars.current) {
            _scrollbars.current.scrollToTop();
        }
    }, [location.pathname]);

    return (
        <Document locale={"es"}>
            <MaterialYouProvider theme={createMaterialYouTheme(themeColor)}>
                <GlobalLoading />
                <Scrollbars
                    style={{ width: "100vw", height: "100vh" }}
                    universal
                    autoHide
                    ref={_scrollbars}
                >
                    <Outlet />
                </Scrollbars>
            </MaterialYouProvider>
        </Document>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    console.log(error);

    return (
        <Document title="Error!">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div>
                    <h1>There was an error</h1>
                    <p>{error.message}</p>
                    <hr />
                    <p>
                        Hey, developer, you should replace this with what you
                        want your users to see.
                    </p>
                </div>
            </ThemeProvider>
        </Document>
    );
}

export function CatchBoundary() {
    const caught = useCatch();

    let message;
    switch (caught.status) {
        case 401:
            message = (
                <p>
                    Oops! Looks like you tried to visit a page that you do not
                    have access to.
                </p>
            );
            break;
        case 404:
            message = (
                <p>
                    Oops! Looks like you tried to visit a page that does not
                    exist.
                </p>
            );
            break;

        default:
            throw new Error(caught.data || caught.statusText);
    }

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <h1>
                    {caught.status}: {caught.statusText}
                </h1>
                {message}
            </ThemeProvider>
        </Document>
    );
}
