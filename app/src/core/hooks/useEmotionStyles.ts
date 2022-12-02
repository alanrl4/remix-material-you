import { EmotionCache } from "@emotion/cache";
import { unstable_useEnhancedEffect } from "@mui/material";
import useClientStyleData from "./useClientStyleData";

export default function useEmotionStyles(emotionCache: EmotionCache) {
    const clientStyleData = useClientStyleData();

    // Only executed on client
    unstable_useEnhancedEffect(() => {
        // re-link sheet container
        emotionCache.sheet.container = document.head;
        // re-inject tags
        const tags = emotionCache.sheet.tags;
        emotionCache.sheet.flush();
        tags.forEach((tag) => {
            // eslint-disable-next-line no-underscore-dangle
            (emotionCache.sheet as any)._insertTag(tag);
        });
        // reset cache to reapply global styles
        clientStyleData.reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
