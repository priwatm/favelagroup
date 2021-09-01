import * as React from "react";

export interface HeaderProps {
    children: any
}

export const Header: React.ComponentType<HeaderProps> = ({children}) => {
    return <header>{children}</header>
}
