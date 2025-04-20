import { default as React } from 'react';
type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};
export declare const Button: React.FC<ButtonProps>;
export {};
