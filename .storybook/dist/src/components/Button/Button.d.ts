import 'normalize.css';
import React from 'react';
export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
declare const Button: React.SFC<ButtonProps>;
export default Button;
