import { FC } from "react";
import Select from "./select";
import { SelectOptionProps } from "./option";
type ISelectConponent = typeof Select & {
    Option: FC<SelectOptionProps>;
};
declare const TransSelect: ISelectConponent;
export default TransSelect;
