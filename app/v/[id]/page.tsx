import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { humanDuration, humanSize } from "@/lib/utils";
import { SITENAME } from "@/lib/constants";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }
        const file = data.result[0];
    return (
<div className="grid col-span-full gap-4 md:gap-4 md:mx-10">
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://filemoon.to/e/${file.file_code}`}
                scrolling="no"
                title={file.file_title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.file_title}
                    </CardTitle>
                </CardHeader>
            </Card>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.file_title}
            </h2>
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2w2e4z2e4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
            <SearchCardList query={file.file_title.split(" ")[2]} />
        </div>
        );
}
