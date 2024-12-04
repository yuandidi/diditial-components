import Tabs from "./tabs";
import { TabItemProps } from "./tabItem";
import { FC } from "react";
type ITabsComponent = typeof Tabs & {
    Item: FC<TabItemProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
