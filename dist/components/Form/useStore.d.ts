/// <reference types="react" />
import { RuleItem, ValidateError } from 'async-validator';
export type CustomRuleFunc = ({ getFieldValue }: {
    getFieldValue: (key: string) => string;
}) => RuleItem;
export type CustomRule = RuleItem | CustomRuleFunc;
export interface FieldDetail {
    name: string;
    value: string;
    rules: CustomRule[];
    isValid: boolean;
    errors: ValidateError[];
}
export interface FieldsState {
    [key: string]: FieldDetail;
}
export interface FormState {
    isValid: boolean;
    isSubmitting: boolean;
    errors: Record<string, ValidateError[]>;
}
export interface FieldsAction {
    type: 'addField' | 'updateValue' | 'updateValidateResult';
    name: string;
    value: any;
}
export interface ValidateErrorType extends Error {
    errors: ValidateError[];
    fields: Record<string, ValidateError[]>;
}
declare function useStore(initialValues?: Record<string, any>): {
    fields: FieldsState;
    dispatch: import("react").Dispatch<FieldsAction>;
    form: FormState;
    validateField: (name: string) => Promise<void>;
    getFieldValue: (key: string) => string;
    validateAllFields: () => Promise<{
        isValid: boolean;
        errors: Record<string, ValidateError[]>;
        values: {
            [x: string]: string;
        };
    }>;
    setFieldValue: (name: string, value: any) => void;
    getFieldsValue: () => {
        [x: string]: string;
    };
    resetFields: () => void;
};
export default useStore;
