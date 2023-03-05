import React, { useState } from "react";
import { useAudio } from "react-use";
import { IoPlay, IoPause } from "react-icons/io5";
import Image from "next/image";
import { BsApple } from "react-icons/bs";
import { IoIosMusicalNotes } from "react-icons/io";
import { BsFillVolumeOffFill } from "react-icons/bs";

export const Header: React.FC<{
    song: string;
    disabledPlayer: boolean;
    playSong: (type: "next" | "prev") => void;
}> = ({ song, playSong, disabledPlayer }) => {
    const [autoPlay, setAutoPlay] = useState<boolean>(true);
    const [volume, setVolume] = useState(0.02);
    const [audio, state, controls, ref] = useAudio({
        src: song,
        preload: song,
        autoPlay: autoPlay,
    });
    return (
        <>
            {disabledPlayer ? (
                <div
                    className="text-center  flex items-center justify-center bg-medium-gray py-2.5 bg-opacity-70 backdrop-filter backdrop-blur-lg fixed left-0 right-0"
                    data-testid="container"
                >
                    {audio}
                    <div className="flex items-center mr-64">
                        <Image
                            src="/png-icons/prev-play-icon.png"
                            className="w-full max-h-full object-contain"
                            width={30}
                            height={22}
                            onClick={() => {
                                playSong("prev");
                                setAutoPlay(true);
                            }}
                        />
                        {state.paused ? (
                            <IoPlay
                                onClick={controls.play}
                                cursor="pointer"
                                color="rgba(255, 255, 255, 0.5)"
                                size={30}
                            />
                        ) : (
                            <IoPause
                                onClick={controls.pause}
                                cursor="pointer"
                                color="rgba(255, 255, 255, 0.5)"
                                size={30}
                            />
                        )}
                        <Image
                            src="/png-icons/next-play-icon.png"
                            className="w-full max-h-full object-contain"
                            width={30}
                            height={22}
                            onClick={() => {
                                playSong("next");
                                setAutoPlay(true);
                            }}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-gray-700 px-2 py-2">
                            <IoIosMusicalNotes
                                color="#fff"
                                opacity={0.3}
                                size={23}
                            />
                        </div>
                        <div className="bg-gray-500 flex justify-center items-center py-2 w-96 bg-opacity-50">
                            <BsApple color="#fff" opacity={0.6} size={23} />
                        </div>
                    </div>
                    <div className="flex items-center ml-20">
                        <BsFillVolumeOffFill color="#7F7F7F" size={20} />
                        <input
                            type="range"
                            max={state.duration}
                            value={state.time}
                            onChange={(event) => {
                                controls.seek(event.target.valueAsNumber);
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="text-center flex items-center justify-center bg-medium-gray py-3 bg-opacity-70 backdrop-filter backdrop-blur-lg fixed left-0 right-0"
                    data-testid="container"
                >
                    {audio}
                    <Image
                        src="/png-icons/prev-play-icon.png"
                        className="w-full max-h-full object-contain"
                        width={30}
                        height={22}
                        onClick={() => {
                            playSong("prev");
                            setAutoPlay(true);
                        }}
                    />
                    {state.paused ? (
                        <IoPlay
                            onClick={controls.play}
                            cursor="pointer"
                            color="rgba(255, 255, 255, 0.5)"
                            size={30}
                        />
                    ) : (
                        <IoPause
                            onClick={controls.pause}
                            cursor="pointer"
                            color="rgba(255, 255, 255, 0.5)"
                            size={30}
                        />
                    )}
                    <Image
                        src="/png-icons/next-play-icon.png"
                        className="w-full max-h-full object-contain"
                        width={30}
                        height={22}
                        onClick={() => {
                            playSong("next");
                            setAutoPlay(true);
                        }}
                    />
                    <div className="flex flex-col">
                        <div>
                            <span className="text-xs text-gray-500">
                                {state.time > 59
                                    ? (state.time / 60)
                                          .toFixed(2)
                                          .replace(".", ":")
                                    : state.time.toFixed(2).replace(".", ":")}
                            </span>
                        </div>
                        <input
                            type="range"
                            max={state.duration}
                            value={state.time}
                            onChange={(event) => {
                                controls.seek(event.target.valueAsNumber);
                            }}
                        />
                    </div>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.02}
                        value={volume}
                        onChange={(event) => {
                            setVolume(event.target.valueAsNumber);
                            controls.volume(volume);
                        }}
                    />
                </div>
            )}
        </>
    );
};
