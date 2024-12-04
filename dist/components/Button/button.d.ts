import React from "react";
import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
/** Button 的基础属性 */
export interface BaseButtonProps {
    /** 自定义类名 */
    className?: string;
    /** 是否禁用按钮 */
    disabled?: boolean;
    /** 按钮的尺寸 */
    size?: ButtonSize;
    /** 按钮的类型 */
    btnType?: ButtonType;
    /** 按钮的内容 */
    children: React.ReactNode;
    /** 链接类型按钮的跳转地址 */
    href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 *
 * ## 引用方法
 * ```javascript
 * import { Button } from 'diditial';
 * ```
 */
export declare const Button: FC<ButtonProps>;
export default Button;
