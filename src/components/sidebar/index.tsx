import React, { useState } from "react";
import { LINKS } from "./links/LINKS";
import Link from "next/link";
import { Searchbar } from "./components/searchbar";

export const Sidebar: React.FC<{ currentRoute: string }> = ({
    currentRoute,
}) => {
    const [searchQ, setSearchQ] = useState<string>("");
    console.log(currentRoute);
    return (
        <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-7 py-4 flex flex-col items-start overflow-y-auto w-full bg-deep-gray border-r border-border-gray">
                <Searchbar
                    type="text"
                    value={searchQ}
                    placeholder="Search"
                    setValue={setSearchQ}
                />
                <ul className="space-y-2">
                    {LINKS.map((LINK) => (
                        <li key={LINK.id} className="w-full">
                            {currentRoute.toString() === LINK.to.toString() && (
                                <Link
                                    href={LINK.to}
                                    className="flex items-center p-2 text-base font-bold w-full text-white rounded-lg dark:text-white "
                                >
                                    <div className="flex items-center bg-light-gray w-48 rounded-md py-1.5 px-1.5">
                                        <div className="text-red-500 flex mr-2 items-center text-lg">
                                            <LINK.icon />
                                        </div>
                                        <span className="ml-3 text-white  text-sm ">
                                            {LINK.name}
                                        </span>
                                    </div>
                                </Link>
                            )}
                            {currentRoute !== LINK.to && (
                                <Link
                                    href={LINK.to}
                                    className="flex items-center p-2 text-base font-bold text-white rounded-lg dark:text-white "
                                >
                                    <div className="flex items-center py-1.5 px-1.5">
                                        <div className="text-red-500 flex mr-2 items-center text-lg">
                                            <LINK.icon />
                                        </div>
                                        <span className="ml-3 text-white text-sm ">
                                            {LINK.name}
                                        </span>
                                    </div>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};
