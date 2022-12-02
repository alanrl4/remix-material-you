import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import ClientCacheProvider from "./src/core/components/ClientCacheProvider";

hydrateRoot(
    document,
    <ClientCacheProvider>
        <RemixBrowser />
    </ClientCacheProvider>
);
