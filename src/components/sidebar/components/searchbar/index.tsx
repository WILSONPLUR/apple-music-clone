import React from "react";
import { CgSearch } from "react-icons/cg";

export const Searchbar: React.FC<{
    type: "text";
    value: string;
    placeholder: string;
    setValue: (value: string) => void;
}> = ({ type, value, placeholder, setValue }) => {
    return (
        <div className="bg-dark-gray px-2 mb-5 text-border-gray h-fit flex items-center rounded-sm w-full border border-border-gray">
            <CgSearch color="#fff" />
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
                className="bg-dark-gray text-xs pl-2 py-1.5 placeholder:text-border-gray text-white w-full"
            />
        </div>
    );
};
