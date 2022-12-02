import { LinearProgress } from "@mui/material";
import { useTransition } from "@remix-run/react";

function GlobalLoading() {
    const transition = useTransition();

    /*
    const isPending =
    transition.state === "loading" &&
    transition.location.pathname === path.pathname;
    */

    // TODO: fix this
    if (transition.state === "loading")
        return (
            <LinearProgress
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10000,
                    height: "2px",
                }}
                color="primary"
            />
        );

    return <></>;
}

export { GlobalLoading };
