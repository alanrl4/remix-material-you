import { NodeOnDiskFile } from "@remix-run/node";
import { existsSync, readFile } from "./files.server";

export default async function (
    formdata: FormData,
    body: { [key: string]: FormDataEntryValue },
    jsonField: string,
    formdataField: string
) {
    const data = body[jsonField] as NodeOnDiskFile;

    if (!existsSync((data as any).filepath)) {
        return;
    }

    const fileContent = await readFile((data as any).filepath);

    const file = new File([fileContent], data.name, {
        type: data.type,
    });

    console.log(fileContent.length);

    formdata.append(formdataField ?? jsonField, file);
}
