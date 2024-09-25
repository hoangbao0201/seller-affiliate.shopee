"use client";

import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useCopyToClipboard, useDebounceValue } from "usehooks-ts";

export default function Home() {
    const [load, setLoad] = useState(false);
    const [link, setLink] = useState("");
    const [dataGenaratorLink, setDataGenaratorLink] = useState<null | {
        shortLink: string;
        longLink: string;
    }>(null);

    const [copiedText, copy] = useCopyToClipboard()

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  }

    const handle = async () => {
        try {
            setLoad(false);
            const dataGRes: any = await axios.get("/api/get-url?slug=" + link);

            if (dataGRes.data.success) {
                setDataGenaratorLink({
                    longLink: dataGRes.data.data.longLink,
                    shortLink: dataGRes.data.data.shortLink,
                });
            } else {
                setDataGenaratorLink(null);
            }
        } catch (error) {}
    };

    const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setLoad(true);
        setLink(e.target.value);
    };

    const [valueDebounce] = useDebounceValue(link, 500);

    useEffect(() => {
        if (load) {
            handle();
        }
    }, [valueDebounce]);

    return (
        <div className="p-4">
            <textarea
                value={link}
                onChange={changeValue}
                className="p-3 w-full max-w-xl h-32 border resize-none focus:outline-blue-600 focus:border-blue-600"
            />
            <div>
                {dataGenaratorLink && (
                    <div>
                        <h3 className="text-lg font-semibold">Short Link:</h3>
                        <div onClick={handleCopy(dataGenaratorLink?.shortLink)} className="w-full cursor-pointer select-none whitespace-pre-wrap break-words text-start px-2 py-1 border rounded-sm bg-slate-200">{dataGenaratorLink?.shortLink}</div>
                        <h3 className="text-lg font-semibold">Long Link:</h3>
                        <div onClick={handleCopy(dataGenaratorLink?.longLink)} className="w-full cursor-pointer select-none whitespace-pre-wrap break-words text-start px-2 py-1 border rounded-sm bg-slate-200">{dataGenaratorLink?.longLink}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
