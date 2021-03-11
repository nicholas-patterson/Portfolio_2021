import React from 'react'
import LayoutCSS from "../styles/layout.module.css";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className={LayoutCSS.container}>
            {children}
        </div>
    )
}
