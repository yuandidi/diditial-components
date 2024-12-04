import { MenuProps } from "./menu";
import { SubMenuProps } from "./subMenu";
import { MenuItemProps } from "./menuItem";
import { FC } from "react";
export type IMemuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMemuComponent;
export default TransMenu;
