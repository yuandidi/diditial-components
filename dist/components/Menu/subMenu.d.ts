import React from 'react';
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    children?: React.ReactNode;
}
declare function SubMenu({ index, title, className, children }: SubMenuProps): import("react/jsx-runtime").JSX.Element;
declare namespace SubMenu {
    var displayName: string;
}
export default SubMenu;
