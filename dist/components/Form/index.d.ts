import { FC } from "react";
import Form from "./form";
import { FormItemProps } from "./formItem";
export type FormComponent = typeof Form & {
    Item: FC<FormItemProps>;
};
declare const TransForm: FormComponent;
export default TransForm;
