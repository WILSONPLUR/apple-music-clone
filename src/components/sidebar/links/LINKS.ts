import { ReactElement } from "react";
import { IoRadioOutline } from "react-icons/io5";
import { MdPlayCircleOutline } from "react-icons/md";
import { BsGrid } from "react-icons/bs";

type LINK = {
    name: string;
    to: string;
    icon: React.FC;
    id: number;
};

export const LINKS: LINK[] = [
    {
        name: "Listen Now",
        to: "/listen-now",
        icon: MdPlayCircleOutline,
        id: 1,
    },
    {
        name: "Browse",
        to: "/browse",
        icon: BsGrid,
        id: 2,
    },
    {
        name: "Radio",
        to: "/radio",
        icon: IoRadioOutline,
        id: 3,
    },
];
