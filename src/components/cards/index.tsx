import React, { Dispatch, SetStateAction } from "react";

interface IArtists {
    artists: [{ alias: string; id: string; adamid: string }];
}

interface ITracks {
    layout: string;
    type: "MUSIC";
    title: string;
    subtitle: string;
    key: string;
    artists: IArtists;
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

export const Cards: React.FC<{
    selectSong: React.Dispatch<React.SetStateAction<ISong>>;
    songs: ITracks[];
    disablePlayer: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ selectSong, songs, disablePlayer }) => {
    return (
        <div className="flex-1 container my-8 xl:max-w-full max-w-screen-lg mx-auto p-5">
            <div className="grid grid-cols-6 md:grid-cols-2 my-10 lg:grid-cols-6 gap-6">
                {songs &&
                    songs.map((song: ITracks) => (
                        <div
                            key={song.key}
                            onClick={() => {
                                disablePlayer(false);
                                selectSong(song);
                            }}
                            className="col-span-1 rounded-md cursor-pointer p-1"
                            data-testid="container"
                        >
                            <img
                                className="rounded-md w-full object-cover bg-cover"
                                src={song?.images?.coverart}
                            />
                            <h4 className="text-xs text-white font-semibold mt-2 hover:underline">
                                {song.title}
                            </h4>
                            <p className="m-0 text-xs text-gray-400 hover:underline">
                                {song.subtitle}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};
