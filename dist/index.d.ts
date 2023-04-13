import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
    /**Esto es para probar `true`
     * @default true
     *
     */
    titulito: string;
}
declare const Button: ({ children, onClick, titulito }: ButtonProps) => JSX.Element;

export { Button, ButtonProps };
