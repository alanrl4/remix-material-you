import {
    unstable_composeUploadHandlers,
    unstable_createFileUploadHandler,
    unstable_createMemoryUploadHandler,
    unstable_parseMultipartFormData
} from "@remix-run/node";

export default async function (request: Request) {
    const uploadHandler = unstable_composeUploadHandlers(
        unstable_createFileUploadHandler({
            maxPartSize: 5_000_000,
            file: ({ filename }) => filename,
        }),
        unstable_createMemoryUploadHandler()
    );
    return await unstable_parseMultipartFormData(request, uploadHandler);
}
