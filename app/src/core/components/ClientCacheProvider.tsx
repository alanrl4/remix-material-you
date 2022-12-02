import { CacheProvider } from "@emotion/react";
import * as React from "react";
import { useState } from "react";
import ClientStyleContext from "../contexts/ClientStyleContext";
import createEmotionCache from "../utils/createEmotionCache";

interface ClientCacheProviderProps {
    children: React.ReactNode;
}

export default function ClientCacheProvider({ children }: ClientCacheProviderProps) {
    const [cache, setCache] = useState(createEmotionCache());

    function reset() {
        setCache(createEmotionCache());
    }

    return (
        <ClientStyleContext.Provider value={{ reset }}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStyleContext.Provider>
    );
}
