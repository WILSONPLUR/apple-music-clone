import React from "react";

import { Button, Cards } from "@components";

export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="container ml-auto">{children}</div>;
};
