import React, { FC } from "react";
export interface TabItemProps {
    label: string | React.ReactElement;
    disabled?: boolean;
    children?: React.ReactNode;
}
export declare const TabItem: FC<TabItemProps>;
