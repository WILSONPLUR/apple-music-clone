import React, { useEffect, useState } from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import axios from "axios";
import { useQuery } from "react-query";
import Head from "next/head";
import { Sidebar } from "@components/sidebar";
import { useRouter } from "next/router";

interface IArtists {
    artists: [{ alias: string; id: string; adamid: string }];
}

interface ISong {
    layout: string;
    type: "MUSIC";
    title: string;
    subtitle: string;
    key: string;
    artists?: IArtists;
    images: {
        background: string;
        coverart: string;
        joecolor: string;
    };
    hub: {
        actions: [
            { name: string; type: string; id: string },
            { name: string; type: "uri"; uri: string },
        ];
    };
}

interface ISongs {
    tracks: ISong[];
}

const BrowsePage: React.FC = () => {
    const [songIndex, setSongIndex] = useState(0);
    const [disabledPlayer, setDisabledPlayer] = useState<boolean>(true);
    const [selectedSong, setSelectedSong] = useState<ISong>({
        layout: "",
        type: "MUSIC",
        title: "",
        subtitle: "",
        key: "",
        images: {
            background: "",
            coverart: "",
            joecolor: "",
        },
        hub: {
            actions: [
                { name: "", type: "", id: "" },
                { name: "", type: "uri", uri: "" },
            ],
        },
    });
    const router = useRouter();
    const playSong = (type: "next" | "prev") => {
        if (type === "next") {
            setSongIndex((prevSongIndex: number) => ++prevSongIndex);
        } else if (type === "prev") {
            if (songIndex > 0) {
                setSongIndex((prevSongIndex: number) => --prevSongIndex);
            } else {
                alert("Only next play");
            }
        }
    };
    const getSongs = async () => {
        const options = {
            url: "https://shazam.p.rapidapi.com/charts/track",
            params: { locale: "en-US", pageSize: "20", startFrom: "0" },
            headers: {
                "X-RapidAPI-Key":
                    "2bbd76691fmsh945f7409c5bf5fbp1f11c4jsn288c2d563e2c",
                "X-RapidAPI-Host": "shazam.p.rapidapi.com",
            },
        };
        const res = await axios.request(options);
        const data = res.data;
        return data;
    };
    const { data, error, isLoading } = useQuery("songs", getSongs);
    console.log(data);
    return (
        <Container>
            <Head>
                <title>iCarrot Music</title>
            </Head>
            <Header
                disabledPlayer={disabledPlayer}
                song={selectedSong.hub.actions[1].uri}
                playSong={playSong}
            />
            <Main>
                {!isLoading && !error && (
                    <Cards
                        songs={data.tracks}
                        selectSong={setSelectedSong}
                        disablePlayer={setDisabledPlayer}
                    />
                )}
            </Main>
            <Sidebar currentRoute={router.pathname} />
            <Footer />
        </Container>
    );
};

export default BrowsePage;
