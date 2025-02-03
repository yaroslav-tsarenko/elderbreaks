import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface ButtonProps {
    icon?: IconType;
    children: ReactNode;
    variant?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}