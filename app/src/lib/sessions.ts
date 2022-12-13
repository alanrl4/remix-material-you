import {
    createCookieSessionStorage,
    json,
    redirect,
    Session,
} from "@remix-run/node";
import COOKIE_NAME from "../constants/COOKIE_NAME";

export const { getSession, commitSession, destroySession } =
    createCookieSessionStorage({
        cookie: {
            name: COOKIE_NAME,
            secrets: ["h04r4hl0ux"],
            sameSite: "none",
            secure: true,
        },
    });

export const getSessionFromRequest = async (request: Request) => {
    return await getSession(request.headers.get("Cookie"));
};

export const saveSessionAndRedirect = async (
    route: string,
    session: Session
) => {
    return redirect(route, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
};

export const saveSessionAndJson = async (session: Session) => {
    return json(
        {},
        { headers: { "Set-Cookie": await commitSession(session) } }
    );
};

export const destroySessionAndRedirect = async (
    route: string,
    session: Session
) => {
    return redirect(route, {
        headers: {
            "Set-Cookie": await destroySession(session),
        },
    });
};
