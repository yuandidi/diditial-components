import React from "react";
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare function MenuItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
declare namespace MenuItem {
    var displayName: string;
}
export default MenuItem;
