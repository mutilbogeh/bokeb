import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
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

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `${file.file_title}`;
    const description = `${file.file_title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`;
    const image = file.player_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }


	<section>

        </section>
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://filemoon.to/e/${file.filecode}`}
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
            <p>{file.title} di {SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma hub sotwe olmek avtube pijat pure gudang pemerkosaan rumah tobrut inggris ngintip vcs binor yandex update remaja {SITENAME} wiki raja bokeptube full porno bokepmama simontok bokepind playbokep indobokep xpanasonline indoh janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update perselingkuhan wiki raja full com porno indoh</p>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.title}
            </h2>
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2w2e4z2e4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
            <SearchCardList query={file.file_title.split(" ")[2]} />
<p>Video bokep indo terbaru viral korea china tante live paksa ngentot abg cewek pelajar pijat Hijab Abg Colmek Film Tante Hot Twitter Asia Download Live stw situs indonesia nonton link sd crot playbokep simontok bokepin montok baru perawan anak kecil telegram selingkuh ojol cantik gay vidio lokal artis pelajar Video Bokep indo jepang indonesia barat viral bokep video terbaru bocil bokepindo korea jilbab smp japan ama sub sma jav cina japanese anime hijab abg colmek film tante twitter asia china rusia no sensor hot arab india download live stw thailand situs hd nonton link baru mom montok telegram perawan sd anak kecil crot bokepindoh selingkuh cantik ojol lokal vidio gay asian anime amerika hentai artis streaming pelajar janda Video Bokep indo jepang indonesia barat viral bokep video terbaru bocil bokepindo korea jilbab smp japan ama sub sma jav cina japanese anime hijab abg colmek film tante twitter asia china rusia no sensor hot arab india download live stw thailand situs hd nonton link baru mom montok telegram perawan sd anak kecil crot bokepindoh selingkuh cantik ojol lokal vidio gay asian anime amerika hentai artis streaming pelajar janda hub sotwe olmek avtube pijat pure gudang pemerkosaan rumah tobrut inggris ngintip vcs binor yandex update remaja {file.title} wiki raja bokeptube full porno bokepmama simontok bokepind playbokep indobokep xpanasonline indoh</p>
        </div>
    );
}
